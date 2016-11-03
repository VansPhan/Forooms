var express = require('express');
var mongoose = require("./db/connection");
var parser = require("body-parser");

var app = express();

var Comment = mongoose.model("Comment");
app.use(parser.urlencoded({extended: true}));
app.use(parser.json({extended: true}));

app.get('/', function(req, res) {
	Comment.find({}).then(function(comments){
   	res.json({ comments });
  	});
})

app.listen(1337, function() {
	console.log('Listening on port 1337');
})