const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const bodyParser = require('body-parser'); // as latest express core frameworks removed body parser

const routes = require('./routes/api/books');

const app = express();


app.use(cors());
//===Use Before Routes for Post====
app.use(bodyParser.json()); // Json req.body
app.use(bodyParser.urlencoded({extended: false}));
//========================

app.use('/api/books', routes);

connectDB();

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello World and Vaibhav!'));

const port = process.env.PORT || 8082;

app.listen(port, ()=> console.log('Server is running on port ' + port.toString()));
