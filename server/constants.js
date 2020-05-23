const EMAIL_HTML_TEMPLATE = (id) => 
`
<div style="background:#eee">
<h1>Thank for Joining Lokali. please clicl the link below to enter Lokali</h1>
<a  href="http://localhost:3000/login?id=${id}">Click here to proccedd</a>
</div>   


`

const GMAIL_ACCESS_CORDS ={
    user:process.env.GMAIL_USER,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    accessToken: process.env.GMAIL_ACCESS_TOKEN,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN
}
const CRYPTO_PASSWORD = 'crypee'
const CRYPTO_ALGORITHM =  'aes-256-ctr'
const  crypto = require('crypto')

const  encrypt = (text) => {
  let cipher = crypto.createCipher(CRYPTO_ALGORITHM, CRYPTO_PASSWORD)
  let crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
const decrypt = (text)=>{
  let decipher = crypto.createDecipher(CRYPTO_ALGORITHM, CRYPTO_PASSWORD)
  let dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


module.exports = {
    EMAIL_HTML_TEMPLATE,
    GMAIL_ACCESS_CORDS,
    encrypt,
    decrypt
    
}