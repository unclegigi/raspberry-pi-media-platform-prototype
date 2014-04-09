var express = require('express');
var app = express();

omx = require('omxcontrol');
app.use(omx());

app.get('/', function(req, res){
    res.sendfile("./views/index.html")
});

app.listen(80);
console.log("Server http://localhost/")