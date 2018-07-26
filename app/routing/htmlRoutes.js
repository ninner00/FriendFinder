// Pull in required dependencies
var path = require('path');
// var express = require('express');

// Export HTML routes
module.exports = function(app) {

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	// app.use(express.static(__dirname+'/public'));
};