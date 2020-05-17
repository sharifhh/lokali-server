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
              console.log(req.session)
              res.json(dbRes)
          })
        }
        catch(e){
            console.error('An error has occured')
            
        }
    })
     
};
