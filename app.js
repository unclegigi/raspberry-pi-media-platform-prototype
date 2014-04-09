var express = require('express');
var app = express();

omx = require('omxcontrol');
app.use(omx());

app.get('/', function(req, res){
    res.send("<a href='http://localhost/omx/start/Test.mp4'>Play Test.mp4</a><br /><a href='http://localhost/omx/pause'>Pause</a><br /><a href='http://localhost/omx/quit'>Quit</a>")
});

app.listen(80);
console.log("Server http://localhost/")