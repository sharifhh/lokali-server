const db = require('../../models');
const connectToDB = require('../../dbConnection')
const  bcrypt = require('bcrypt')

module.exports = (app) => {
    
    app.post('/auth/signup',  async (req,res)=>{
        let newUser = req.body
        let hashPass =  bcrypt.hashSync(newUser.password,10)
        newUser.password = hashPass
        console.log(newUser)
        await connectToDB()
        try{
          await db.User.create(newUser, (err,doc) => {
              let dbRes = err ? err : doc
              res.json(dbRes)
          })
        }
        catch(e){
            console.error('An error has occured')
            
        }
    })
     
};
