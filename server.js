// even tho express is not a core module since it has been installed to node module we dont need 
// give it a file name we dont have to tell node to look into node modules for express 
// it will do that automatically
const express = require('express'); 
const morgan = require('morgan');

const hostname = 'localhost'; 
const port = 3000; 

// define a express function whichs returns an express applicatiion  
const app = express();  
// This will configure morgan to logg the develpment verison  
//this will print additional information to the screen
app.use(morgan('dev')); 
app.use(express.json());

// So any HTTP request to this path will trigger this method. 
app.all('/campsites', (req, res, next) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next();
}); 

app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
}); 

app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`)
});  

app.put('/campsites', (req, res) => {
    res.statusCode = 403; 
    res.end('PUT operation not supported on /campsites');
}); 

app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');  

});

// creating HTTP methods for different endpoints. 
 app.get('/campsites/:campsiteId', (req, res) => {
     res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
 }); 

 app.post('/campsites/:campsiteId', (req, res) => {
     // stage a post request message will use later. 
     res.statusCode = 403; 
     res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`)
 }) 

 app.put('/campsites/:campsiteId', (req, res) => {
     res.write(`Updating the campsite: ${req.params.campsiteId}\n`); 
     res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`); 
 }); 

 app.delete('/campsites/:campsiteId', (req, res) => {
     res.end(`Delecting campsite: ${req.params.campsiteId}`);
 });

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