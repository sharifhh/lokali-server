const db = require('../../models');
const connectToDB = require('../../dbConnection')
const  bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

module.exports = (app) => {
    
    app.post('/auth/signup',  async (req,res)=>{
        let newUser = req.body
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

    app.post('/auth/mail-activation', async (req,res)=>{
        
        let testAccount = await nodemailer.createTestAccount();
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            // service:'Gmail',
            host: "smtp.gmail.com",
            port: 25,
            secure: true, // true for 465, false for other ports
            auth: {
            user: 'dannyboris1993@gmail.com', // generated ethereal user
            pass: 'tpifSP1062016', // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'dannyboris1993@gmail.com', // sender address
            to: "dannyboris1993@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        })
        
};
