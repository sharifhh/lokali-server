const db = require('../../models');
const connectToDB = require('../../dbConnection')






module.exports = (app) =>{
    app.get('/api/users/:id', async (req,res)=>{
        let {id} = req.params
        console.log(req.body)
        await connectToDB()
        try{
            let user = await db.User.findOne({_id:id})
            res.json(user)
        }
        catch(e){
            console.log(e)
        }
    })
}