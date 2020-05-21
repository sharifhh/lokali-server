const db = require('../../models');
const connectToDB = require('../../dbConnection')
const  bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const sessionMiddleware = require('../../middleware/session-middleware')
const {EMAIL_HTML_TEMPLATE} = require('../../constants')
module.exports = (app) => {
    app.get(`/auth/verify/:id`, async (req,res)=>{
        let { id } = req.params
        await connectToDB()
        try{
            let user = await db.User.findOneAndUpdate({_id:id},{verified:true},{new:true},(err,doc)=>{
                res.json(err ? err : doc)
            })
        }catch(e){
            console.log('error')
        }
   
    })
    app.post('/auth/signup',  async (req,res)=>{
        
        let newUser = req.body
        console.log(newUser)
        await connectToDB()
        try{
          await db.User.create(newUser, (err,doc) => {
              let dbRes = err ? err : doc
              console.log(dbRes)
              res.json(dbRes)
          })
        }
        catch(e){
            console.error('An error has occured')
            
        }
    })
    //LOGIN ROUTE
    app.post('/auth/login',  async (req,res)=>{ // this is tricky because it 2 cases. user sign up or new user
        let { pass, email } = req.body
        await connectToDB()
        let userDB = await db.User.findOne({email}, (err,doc)=>{return err ? err : doc})
        // req.session.userId = userDB._id
        if(userDB.password === 'temp-pass'){
            let hashedPass = await bcrypt.hash(pass, 10)
            await db.User.findOneAndUpdate({email:email},{password:hashedPass},{new:true},(err,doc)=>{
                res.status(201).send(err ? err : doc)  
                process.exit(0)
            })
        }else{
            try{
                let {password} = userDB
                let passwordMatch = await bcrypt.compare(pass, password)
                let resp =  passwordMatch ? userDB : null
                if(resp) delete resp.password
                req.session.userId = userDB._id
                res.json(resp)
            }
            catch(e){
                res.json(null)
            }
        }

    })

    app.post('/auth/mail-activation', async (req,res)=>{
        let {id} = req.body
        await connectToDB()
        try{
            let {email} = await db.User.findOne({_id:id})
        }
        catch(e){
            res.status(404).end('User not found');
        }

        const gmailAccessInfo ={
            user:process.env.GMAIL_USER,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            accessToken: process.env.GMAIL_ACCESS_TOKEN,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN
        }
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                    type: "OAuth2",
                    ...gmailAccessInfo
            },
        });
        // send mail with defined transport object
        try{

            let info = await transporter.sendMail({
                from: process.env.SENDER_ADDRESS, // sender address
                to: email, // list of receivers
                subject: 'Lokali Activation Email', // Subject line
                text: "", // plain text body
                html: EMAIL_HTML_TEMPLATE, // html body
            });
            res.send('Mail has been sent!')
        }
        catch(e){
            console.log('------------------------------')
            console.log('------------------------------')
            console.log(e)
            console.log('------------------------------')
            console.log('------------------------------')
        }
        })
        
};
