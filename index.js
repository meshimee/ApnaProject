var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var path = require('path');
var PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res, next) {
 
})

app.listen(PORT, function(err){
 if (err) console.log(err);
 console.log("Server listening on PORT", PORT);
});

var url = "mongodb+srv://shimeeaktar:Accountsimi527@cluster0.3xggejx.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mydb = db.db("shimeedb");
  console.log("Database connected!");
  var obj = {name: "Simi",email:"simiaktar527@gmail.com",password:"1234"};
  var obj1 = {name: obj,email:"simiaktar527@gmail.com",password:"1234"};
  mydb.collection("data").insertOne(obj1);
//   db.close();
});
