// even tho express is not a core module since it has been installed to node module we dont need 
// give it a file name we dont have to tell node to look into node modules for express 
// it will do that automatically
const express = require('express'); 

const hostname = 'localhost'; 
const port = 3000; 

// define a express function whichs returns an express applicatiion  
const app = express(); 

// now we are going to setup the server so it returns the same repsonds for any request 

// The middleware in express has access to three functions  
// req, res, next()
app.use((req, res) => {
    console.log(req.headers); 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html'); 
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')

});

// to start the server we need to write app.listen which will create an instance  
// class of the http server class 

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});