const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

//database
const db = require('./config/db')


//test DB
db.authenticate()
.then(() => console.log('Database connected'))
.catch(err => console.log('Error: ' + err));



const app = express();

app.get('/', (req, res) => {
    res.send('Home')
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));