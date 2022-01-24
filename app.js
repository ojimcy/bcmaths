const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

//database
const db = require('./config/db');
const router = require('./routes');


//test DB
db.authenticate()
.then(() => console.log('Database connected'))
.catch(err => console.log('Error: ' + err));


const app = express();

//Handlebars
app.engine('.hbs', engine({defaltLayout: 'layout', handlebars: allowInsecurePrototypeAccess (Handlebars), extname: '.hbs'}));
app.set('view engine', '.hbs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Home route
app.use('/', require('./routes/index'))

app.use('/buy', require('./routes/index'))
app.use('/books', require('./routes/index'))
app.use('/about', require('./routes/index'))
app.use('/contact', require('./routes/index'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));