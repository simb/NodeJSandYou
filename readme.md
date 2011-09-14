#Code Examples

##Node HTTP Example


    var http = require('http');
    
    http.createServer(function (req, res) {
    
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    
    }).listen(3000, "127.0.0.1");
    
    console.log('Server running at http://127.0.0.1:3000/');


##Node Socket Example


    var http = require('http');
    
    http.createServer(function (req, res) {
    
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    
    }).listen(3000, "127.0.0.1");
    
    console.log('Server running at http://127.0.0.1:3000/');



##NPM Create App

    npm init .

##NPM Connect Static Server

    var connect = require('connect');

	var server = connect.createServer(
		connect.directory(__dirname + '/public'),
		connect.static(__dirname + '/public'),
		connect.logger('dev')
	);

	server.listen(3000);

##Express Application

	var express = require('express');

	var app = express.createServer();

	app.configure(function(){
		app.use(express.static(__dirname+ "/public"));
		app.use(app.router);
	});

	app.get('/',function(req,res){
		res.send('Hey You found me!');
	});

	app.get('/hey/:name',function(req,res){
		res.send('Dude! ' + req.params.name + ", You Rock!" );
	});

	app.listen(3000);

##Express Application Generation

	npm install express -g
	
	express new .
	
##Socket.io

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

	


