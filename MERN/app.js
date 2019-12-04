const express = require('express');
const connectDB = require('./config/db');

const bodyParser = require('body-parser'); // as latest express core frameworks removed body parser

const routes = require('./routes/api/books');

const app = express();

//===Use Before Routes for Post====
app.use(bodyParser.json()); // Json req.body
app.use(bodyParser.urlencoded({extended: false}));
//========================

app.use('/api/books', routes);

connectDB();

app.get('/', (req, res) => res.send('Hello World and Vaibhav!'));

const port = process.env.PORT || 8082;

app.listen(port, ()=> console.log('Server is running on port ' + port.toString()));
