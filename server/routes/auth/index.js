const db = require('../../models');
const connectToDB = require('../../dbConnection')
const  bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const sessionMiddleware = require('../../middleware/session-middleware')
const {EMAIL_HTML_TEMPLATE, GMAIL_ACCESS_CORDS ,encrypt, decrypt} = require('../../constants')


module.exports = (app) => {
 
    app.get(`/auth/verify/:id`, async (req,res)=>{
        let {id} = req.params
        console.log(id)
        id = decrypt(id)
        await connectToDB()
        try{
            let user = await db.User.findOneAndUpdate({_id:id},{verified:true},{new:true},(err,doc)=>{
                console.log('============================')
                console.log('============================')
                console.log(doc)
                console.log('============================')
                console.log('============================')
                res.json(err ? err : doc)
            })
        }catch(e){
            console.log('error')
        }
   
    })
    app.post('/auth/signup',  async (req,res)=>{
        
        let newUser = req.body
        await connectToDB()
        try{
          await db.User.create(newUser, (err,doc) => {
              let dbRes = err ? err : doc
              res.json(dbRes)
          })
        }
        catch(e){
            console.error('An error has occured')
             res.json(null);
        }
    })

    app.get('/auth/check-session',(req,res)=>{
        res.json(req.session.userId)
    })
    //LOGIN ROUTE
    app.post('/auth/login',  async (req,res)=>{ // this is tricky because it 2 cases. user sign up or new user
        let { pass, email } = req.body
        console.log(pass,email)
        await connectToDB()
        let userDB = await db.User.findOne({email}, (err,doc)=>{return err ? err : doc})
        if(!userDB){
            res.send('Email doesnt match')
            process.exit(0)
        }
        if(userDB.password === 'temp-pass'){
            let hashedPass = await bcrypt.hash(pass, 10)
            await db.User.findOneAndUpdate({email:email},{password:hashedPass},{new:true},(err,doc)=>{
                res.status(201).send(err ? err : doc)  
            })
        }else{
            try{
                let {password} = userDB
                console.log(password, pass)
                let passwordMatch = await bcrypt.compare(pass, password)
                let resp =  passwordMatch ? userDB : null
                console.log('-=-=-=-=-=-=-=-=-=-=-=')
                
                console.log(resp)
                console.log('-=-=-=-=-=-=-=-=-=-=-=')
                
                if(resp) {
                    delete resp.password
                    req.session.userId = resp._id
                }
                res.json(resp)
            }
            catch(e){
                console.log(e)
                res.json(null)
            }
        }
      );
    } else {
      try {
        let { password } = userDB;
        let passwordMatch = await bcrypt.compare(pass, password);
        let resp = passwordMatch ? userDB : null;
        if (resp) delete resp.password;
        req.session.userId = userDB._id;
        res.json(resp);
      } catch (e) {
        res.json(null);
      }
    }
  });

    })

    app.post('/auth/mail-activation', async (req,res)=>{
        let email,id; 
        id = req.body.id
        await connectToDB()
        try{
            let user = await db.User.findOne({_id:id})
            email = user.email
            id = encrypt(id)
        }
        catch(e){
            res.status(404).end('User not found');
        }


        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                    type: "OAuth2",
                    ...GMAIL_ACCESS_CORDS
            },
        });
        // send mail with defined transport object
        try{

            let info = await transporter.sendMail({
                from: process.env.SENDER_ADDRESS, // sender address
                to: email, // list of receivers
                subject: 'Lokali Activation Email', // Subject line
                text: "", // plain text body
                html: EMAIL_HTML_TEMPLATE(id), // html body
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
