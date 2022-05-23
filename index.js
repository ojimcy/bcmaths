const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
require('dotenv').config()

//database
const db = require('./config/db');


//test DB
db.authenticate()
.then(() => console.log('Database connected... '))
.catch(err => console.log('Error: ' + err));


const app = express();

//Handlebars
app.engine('.hbs', engine({defaltLayout: 'layout', handlebars: allowInsecurePrototypeAccess (Handlebars), extname: '.hbs'}));
app.set('view engine', '.hbs');


app.use(bodyParser.urlencoded({extended: false}));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', require('./routes/index'))

app.use('/author', require('./routes/index'))
app.use('/contact', require('./routes/index'))

app.use('/books', require('./routes/index'))
app.use('/books/buy', require('./routes/index'))

app.use('/buy', require('./routes/index'))

app.use('/register', require('./routes/index'))
app.use('/login', require('./routes/index'))

app.use('/order', require('./routes/index'))



const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on port ${PORT}`));