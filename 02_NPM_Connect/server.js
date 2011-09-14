var connect = require('connect');

var server = connect.createServer(
	connect.directory(__dirname + '/public'),
	connect.static(__dirname + '/public'),
	connect.logger(),
	connect.favicon()
);
	
server.listen(3000);
	
