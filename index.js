const http = require('http');
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');


module.exports = function(mapping) {

	const [directory, basePath] = mapping.split(':');

	// Serve up the file
	const serve = serveStatic(directory);

	// Create server
	return http.createServer((req, res) => {
		// This is what its all about getting static files regardless of the HTTP method.
		req.method = 'GET';

		// Strip the basePath
		if (basePath && req.url.startsWith(basePath)) {
			req.url = req.url.slice(basePath.length);
		}
		const done = finalhandler(req, res);
		serve(req, res, done);
	});
};
