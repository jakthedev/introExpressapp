// even tho express is not a core module since it has been installed to node module we dont need 
// give it a file name we dont have to tell node to look into node modules for express 
// it will do that automatically
const express = require('express'); 
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const partnerRouter = require('./routes/partnerRouter');
const promotionRouter = require('./routes/promotionRouter');

const hostname = 'localhost'; 
const port = 3000; 

// define a express function whichs returns an express applicatiion  
const app = express();  
// This will configure morgan to logg the develpment verison  
//this will print additional information to the screen
app.use(morgan('dev')); 
app.use(express.json()); 

app.use('/campsites', campsiteRouter);  
app.use('/campsites', promotionRouter); 
app.use('/campsites', partnerRouter);

// now we are going to setup express to server file files from the public folder 
app.use(express.static(__dirname + '/public'));

// The middleware in express has access to three functions  
// req, res, next()
app.use((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html'); 
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

// to start the server we need to write app.listen which will create an instance  
// class of the http server class 

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});