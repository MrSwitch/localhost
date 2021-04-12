/* eslint-disable no-console */
const localhost = require('./index.js');
const portfinder = require('portfinder');
const argv = require('minimist')(process.argv);

const port = argv.p || parseInt(process.env.PORT);

if (!port) {
	portfinder.basePort = 8080;
	portfinder.getPort((err, port) => {
		if (err) {
			throw err;
		}
		listen(port);
	});
}
else {
	listen(port);
}

function listen(port) {
	localhost(argv._[0] || './').listen(port);
	console.log(`Starting //localhost${port !== 80 ? `:${port}` : ''}`);
}

if (process.platform === 'win32') {
	require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	}).on('SIGINT', () => {
		process.emit('SIGINT');
	});
}

process.on('SIGINT', () => {
	console.info('localhost stopped.'.red);
	process.exit();
});

process.on('SIGTERM', () => {
	console.info('localhost stopped.'.red);
	process.exit();
});
