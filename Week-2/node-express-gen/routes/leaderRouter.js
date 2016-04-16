var express = require('express');
var router = express.Router();

	router.get('/',function(req,res,next)
	{
        res.end('Will send all the leaders to you!');
	})

	router.post('/',function(req, res, next)
	{
    	res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);    
	})

	router.delete('/',function(req, res, next)
	{
	    res.end('Deleting all leaders');
	});

	router.all('/:leaderId',function(req,res,next) 
	{
	    res.writeHead(200, { 'Content-Type': 'text/plain' });
	    next();
	})

	router.get('/:leaderId',function(req,res,next)
	{
	    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
	})

	router.put('/:leaderId',function(req, res, next)
	{
	    res.write('Updating the leader: ' + req.params.leaderId + '\n');
	    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
	})

	router.delete('/:leaderId',function(req, res, next)
	{
	        res.end('Deleting leader: ' + req.params.leaderId);
	});

module.exports = router;