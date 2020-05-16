const db = require('../../models');
const connectToDB = require('../../dbConnection')

module.exports = (app) => {
    
    app.post('/auth/login',  async (req,res)=>{
        let loggedUser = req.body
        console.log(loggedUser)
        await connectToDB()
        let dbRes = await db.User.create(loggedUser , (err, doc)=>err ? err : doc)
        console.log(dbRes)
        // return dbRes

        
     
    })

};
