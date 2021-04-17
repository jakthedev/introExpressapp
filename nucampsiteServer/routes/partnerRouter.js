const express = require('express'); 
const partnerRouter = express.Router(); 

partnerRouter.route('/')  
.all((req, res, next) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next();
})

.get((req, res) => {
    res.end('Will send all the partners to you');
})

.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`)
})  

.put((req, res) => {
    res.statusCode = 403; 
    res.end('PUT operation not supported on /partners');
}) 

.delete((req, res) => {
    res.end('Deleting all partners');  

});

// creating HTTP methods for different endpoints. 
partnerRouter.get('/partners/:partnerId', (req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
}); 

partnerRouter.post('/partners/:partnerId', (req, res) => {
    // stage a post request message will use later. 
    res.statusCode = 403; 
    res.end(`POST operation not supported on /partners/${req.params.partnerId}`)
}) 

partnerRouter.put('/partners/:partnerId', (req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`); 
    res.end(`Will update the partner: ${req.body.name}
       with description: ${req.body.description}`); 
}); 

partnerRouter.delete('/partners/:partnerId', (req, res) => {
    res.end(`Delecting partner: ${req.params.partnerId}`);
});

module.exports = partnerRouter;