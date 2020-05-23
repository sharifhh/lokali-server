const express = require('express');
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
    origin:'http://localhost:3000' || 'http://127.0.0.1:3000',
    credentials:true
}))

app.use(session({
    name:'my-little-session',
    secret:'My ultraMEGA SECRET',
    cookie:{
        maxAge: 1000  * 3 * 10,
        secure: false,
        sameSite:true,
        HttpOnly :false
    },
    resave:false,
    saveUninitialized:false,
}))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));

// routes
require('./routes/api')(app);
require('./routes/auth')(app);
require('./routes/api/user')(app);

// listen event 
app.listen(PORT, () => {
    console.log('listening on port ' + PORT + "\nhttp://localhost:" + PORT);
});