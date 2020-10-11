var express = require('express');
var app = express();
var path = require('path');

var fs = require("fs");
var host = "127.0.0.1";
var port = 3000;

//the line below loads all scripts and other files (inside the same folder as server.js) as non html files so there is no crash.
app.use(express.static(__dirname));

//this line loads
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/SpaceCity.html'));
});


app.listen(port);
console.log("app listening on port:" + port);
