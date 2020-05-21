const db = require('../../models');
const connectToDB = require('../../dbConnection')
const  bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')


module.exports = (app) => {
    
    app.post('/auth/signup',  async (req,res)=>{
        
        let newUser = req.body
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
        let {id} = req.body
        await connectToDB()
        let {email} = await db.User.findOne({_id:id})
        let htmlTemplate = `
        <div style="background:#eee">
            <h1>Thank for Joining Lokali. please clicl the link below to enter Lokali</h1>
            <a> href=http://localhost:3000/login?id=${id}</a>
        </div>   
        `
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
        try{\

            let info = await transporter.sendMail({
                from: process.env.SENDER_ADDRESS, // sender address
                to: email, // list of receivers
                subject: 'Lokali Activation Email', // Subject line
                text: "", // plain text body
                html: htmlTemplate, // html body
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
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
