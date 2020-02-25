var express       = require('express'),
    app           = express(),
    port          = process.env.PORT || 5000,
    mongoose      = require('mongoose'),
    FlightDetails = require('./models/flightDetailsModel'),
    cors          = require("cors"),
    bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DBURL || 'mongodb://mongo:27017/inflightdetails'); 


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let flightDetailsRoutes = require('./routes/flightDetailsRoutes')(app)

app.listen(port)

console.log('RESTful API server started on: ' + port)
