var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Comment = mongoose.model("Comment");

Comment.remove({}).then(function(){
  Comment.collection.insert(seedData).then(function(){
    process.exit();
  });
});
