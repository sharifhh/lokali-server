const db = require('../../models');
const connectToDB = require('../../dbConnection')

module.exports = (app) => {
    
    app.post('/auth/signup',  async (req,res)=>{
        let newUser = req.body
        await connectToDB()
        try{
          await db.User.create(newUser, (err,doc) => {
              let dbRes = err ? err : doc
              console.log('saul goodman!')
              res.json(dbRes)
          })
        }
        catch(e){
            console.error('An error has occured')
            
        }
    })
     
};
