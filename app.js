var express = require('express');
var app = express();

omx = require('omxcontrol');
app.use(omx());

app.get('/', function(req, res){
    res.send("OMX")
});

app.listen(80);
console.log("Start")