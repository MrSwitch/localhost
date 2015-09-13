var http = require('http');
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');


module.exports = function(directory) {

	// Serve up the file
	var serve = serveStatic(directory);

	// Create server
	return http.createServer(function(req, res) {
		// This is what its all about getting static files regardless of the HTTP method.
		req.method = 'GET';
		var done = finalhandler(req, res);
		serve(req, res, done);
	});
}
