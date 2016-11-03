var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema(
	{
		id: Number,
   	text: String
  	}
);

mongoose.model("Comment", CommentSchema);

mongoose.connect("mongodb://localhost/foroom");


module.exports = mongoose;
