var http = require('http');

var server = http.createServer(function (req, res){

	res.writeHead(200, {
	'content-type':'text/plain'
});

res.write('Hallo Marcel! Nicht verzweifeln!!!');



res.end();

}).listen(1337);

