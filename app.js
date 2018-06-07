var expres = require('express');
var server = express();

// route public pour charger avant les pages 
server.use(express.static('public'));