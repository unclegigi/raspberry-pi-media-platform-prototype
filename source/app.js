var express = require('express');
var app = express();

omx = require('omxcontrol');
app.use(omx());

app.get('/', function(req, res){
    res.sendfile("./views/index.html");
});

app.get("/player/start/:file", function(req, res) {
	console.log(req.params.file);
	res.end();
});

app.get("/player/stop/:file", function(req, res) {
	console.log(req.params.file);
	res.end();
});

app.get("/player/pause/:file", function(req, res) {
	console.log(req.params.file);
	res.end();
});

app.listen(3000);
console.log("Server started.")