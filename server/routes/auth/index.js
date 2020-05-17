const db = require('../../models');
const connectToDB = require('../../dbConnection')
const  bcrypt = require('bcrypt')

module.exports = (app) => {
    
    app.post('/auth/signup',  async (req,res)=>{
        let newUser = req.body
        let hashPass =  bcrypt.hashSync(newUser.password, 10)
        newUser.password = hashPass
        await connectToDB()
        try{
          await db.User.create(newUser, (err,doc) => {
              let dbRes = err ? err : doc
              delete dbRes.password 
              req.session.user = dbRes
              res.json(dbRes)
          })
        }
        catch(e){
            console.error('An error has occured')
            
        }
    })
    //LOGIN ROUTE
    app.post('/auth/login', async (req,res)=>{
        let user = req.body
        await connectToDB()
        let userDB = await db.User.findOne({email:user.email})
        try{
            let {password} = userDB
            let passwordToCompare = user.password
            let passwordMatch = await bcrypt.compare(passwordToCompare, password)
            req.session.user = userDB
            let resp =  passwordMatch ? userDB : null
            res.json(resp)
        }
        catch(e){
            res.json(null)
        }

    })
     
};
