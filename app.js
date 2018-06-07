var express = require('express');
var server = express();
// route public pour charger avant les pages 
server.use(express.static('public'));

server.get('/', function(request, response) {
	response.sendFile(__dirname+'/index.html');
});
server.get('/liste', function(request, response) {
	response.sendFile(__dirname+'/data.json');
});



server.listen(3050, function() { console.log("Listening on port 3050")});

