const db = require('../../models')
const connectToDB = require('../../dbConnection')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const sessionMiddleware = require('../../middleware/session-middleware')
const {
  EMAIL_HTML_TEMPLATE,
  GMAIL_ACCESS_CORDS,
  sendMail
} = require('../../constants')

module.exports = app => {
  app.get(`/auth/verify/:id`, async (req, res) => {
    let { id } = req.params
    await connectToDB()
    try {
      await db.User.findOneAndUpdate(
        { _id: id },
        { verified: true },
        { new: true },
        (err, doc) => {
          res.json(err ? err : doc)
        }
      )
    } catch (e) {
      console.log('error')
      res.json(null)
    }
  })
  app.post('/auth/signup', async (req, res) => {
    let newUser = req.body
    await connectToDB()
    try {
      await db.User.create(newUser, (err, doc) => {
        res.json(err ? err : doc)
      })
    } catch (e) {
      console.error('An error has occured')
      res.json(null)
    }
  })

  app.get('/auth/check-session', (req, res) => res.json(req.session.userId))
  //LOGIN ROUTE
  app.post('/auth/login', async (req, res, next) => {
    let { pass, email, passConf } = req.body
    if (pass !== passConf && passConf) return
    await connectToDB()
    let user = await db.User.findOne({ email })
    let passwordMatch = user ? await bcrypt.compare(pass, user.password) : null
    if (!user || (user.password !== 'temp-pass' && !passwordMatch)) {
      res.json(null)
      return
    }
    if (user.password === 'temp-pass') {
      //New User
      let hashedPass = await bcrypt.hash(pass, 10)
      let newUser = await db.User.findOneAndUpdate(
        { email },
        { password: hashedPass },
        { new: true }
      )
      res.json(newUser)
      return
    } else {
      //Already logged in
      try {
        if (passwordMatch && user.verified) {
          delete user.password
          req.session.userId = user._id
          res.json(user)
        } else {
          res.json(null)
        }
      } catch (e) {
        res.json(null)
      }
    }
  })

  app.post('/auth/mail-activation', async (req, res) => {
    let email, id
    id = req.body.id
    await connectToDB()
    try {
      let user = await db.User.findOne({ _id: id })
      email = user.email
    } catch (e) {
      console.error(e)
      res.status(404).end('User not found')
    }
    sendMail(email, 'Lokali Activation Email', EMAIL_HTML_TEMPLATE(id))
  })
}
