var express = require('express');
var router = express.Router();
	router.get('/',function(req,res,next)
	{
        res.end('Will send all the promotions to you!');
	})

	router.post('/',function(req, res, next)
	{
    	res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);    
	})

	router.delete('/',function(req, res, next)
	{
	    res.end('Deleting all promotions');
	});

	router.all('/:promotionId',function(req,res,next) 
	{
	    res.writeHead(200, { 'Content-Type': 'text/plain' });
	    next();
	})

	router.get('/:promotionId',function(req,res,next)
	{
	    res.end('Will send details of the promotion: ' + req.params.promotionId +' to you!');
	})

	router.put('/:promotionId',function(req, res, next)
	{
	    res.write('Updating the promotion: ' + req.params.promotionId + '\n');
	    res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
	})

	router.delete('/:promotionId',function(req, res, next)
	{
	        res.end('Deleting promotion: ' + req.params.promotionId);
	});


module.exports = router;
