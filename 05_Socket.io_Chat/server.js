var connect = require('connect'); 

var server = connect.createServer(
	connect.static(__dirname + '/public')
);

server.listen(3000);

var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
	socket.send('Please enter a user name ...');
	
	var userName;
	
	socket.on('message', function(message){
		if(!userName) {
            userName = message;
            io.sockets.send(message + ' has entered the zone.');
            return;
        }

		var broadcastMessage = userName + ': ' + message;
        io.sockets.send(broadcastMessage);
	});
	socket.on('disconnect', function() {
        var broadcastMessage = userName + ' has left the zone.';
        io.sockets.send(broadcastMessage);
    });
});

