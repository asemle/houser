const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();
const massive = require('massive');

const checkForSession = require('./middlewares/checkForSession');
const authCtrl = require('./controllers/authController.js');
const propCtrl = require('./controllers/propController.js')

var port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

// app.use(express.static(`${__dirname}/../build`));

app.use(checkForSession);



app.post('/api/auth/login', authCtrl.login);
app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/logout', authCtrl.logout);

app.post('/api/properties', propCtrl.addProperty);
app.get('/api/properties', propCtrl.getProperties);
app.delete('/api/properties/:id', propCtrl.delete)


// const path = require('path')
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`Listening on port ${port}`))
})