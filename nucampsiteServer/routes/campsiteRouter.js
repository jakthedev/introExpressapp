const express = require('express'); 
const campsiteRouter = express.Router(); 

campsiteRouter.route('/')  
.all((req, res, next) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next();
})

.get((req, res) => {
    res.end('Will send all the campsites to you');
})

.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`)
})  

.put((req, res) => {
    res.statusCode = 403; 
    res.end('PUT operation not supported on /campsites');
}) 

.delete((req, res) => {
    res.end('Deleting all campsites');  

});

// creating HTTP methods for different endpoints. 
campsiteRouter.get('/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
}); 

campsiteRouter.post('/:campsiteId', (req, res) => {
    // stage a post request message will use later. 
    res.statusCode = 403; 
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`)
}) 

campsiteRouter.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`); 
    res.end(`Will update the campsite: ${req.body.name}
       with description: ${req.body.description}`); 
}); 

campsiteRouter.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Delecting campsite: ${req.params.campsiteId}`);
});

module.exports = campsiteRouter;

