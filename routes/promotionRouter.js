const express = require('express'); 
const promotionRouter = express.Router(); 

promotionRouter.route('/')  
.all((req, res, next) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next();
})

.get((req, res) => {
    res.end('Will send all the promotions to you');
})

.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`)
})  

.put((req, res) => {
    res.statusCode = 403; 
    res.end('PUT operation not supported on /promotions');
}) 

.delete((req, res) => {
    res.end('Deleting all promotions');  

});

// creating HTTP methods for different endpoints. 
promotionRouter.get('/promotions/:promotionsId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
}); 

promotionRouter.post('/promotions/:promotionsId', (req, res) => {
    // stage a post request message will use later. 
    res.statusCode = 403; 
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}`)
}) 

promotionRouter.put('/promotions/:promotionId', (req, res) => {
    res.write(`Updating the promotion: ${req.params.promotionId}\n`); 
    res.end(`Will update the promotion: ${req.body.name}
       with description: ${req.body.description}`); 
}); 

promotionRouter.delete('/promotions/:promotionId', (req, res) => {
    res.end(`Delecting promotions: ${req.params.campsiteId}`);
});

module.exports = promotionRouter;