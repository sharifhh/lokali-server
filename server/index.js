const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express();

const PORT = process.env.PORT || 4000;

// Middleware

app.use(session({
    name:'my-little-session',
    secret:'My ultraMEGA SECRET',
    cookie:{
        maxAge: 1000 * 60 * 10,
        secure: false,
        sameSite:true,
        HttpOnly :false
    },
    resave:false,
    saveUninitialized:false,
}))
app.use(cors())

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));

// routes
require('./routes/api')(app);
require('./routes/auth')(app);

// listen event 
app.listen(PORT, () => {
    console.log('listening on port ' + PORT + "\nhttp://localhost:" + PORT);
});