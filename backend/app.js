let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    multer = require('multer'),
    dataBaseConfig = require('./database/db');
   

// Connect mongodb
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected successfully')
},
error => {
    console.log('Could not connect to database : ' + error)
})

// Set up express port
const quiltRoute = require('./routes/quilt.route')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/frontend')));

// RESTful API root
app.use('/api', quiltRoute)

// Port
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Connected to port ' + port) 
})

// Find 404
app.use((req, res, next) => {
    
});

// Index route
app.get('/', (req, res) => {
    res.send('invalid endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/frontend/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
