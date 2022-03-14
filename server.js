var webSocketServ = require('ws').server;

var wss = new webSocketServ({
	port: 9090
});

wss.on('connection', function (conn) {
	console.log("User connected");

	conn.on('message', function (message) {

	})
	conn.on('close', function (message) {
		console.log('Connection closed');
	})
})

function sendToOtherUser(connection, message) {
	connection.send(JSON.stringify(message))
}