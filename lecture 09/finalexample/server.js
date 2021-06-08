// very easy way of creating a Node Server using Express
const express = require("express");
const app = express();
const path = require("path");

// listen on port 5000 for connections
var port = 5000;

var server = app.listen(port);


//use app.METHOD(PATH, HANDLER) for route definition, e.g.
app.get('/', function (req, res) {

   console.log("The request: "+req.url);
   console.log ("The method is: "+ req.method); 
   res.send(`<h1> Welcome to this page! <br> Today is ${new Date().toLocaleDateString()} </h1>`); 

})

// new route to list examples of search engines
app.get('/searchengine', function (req, res) {

   console.log("The request: "+req.url);
   console.log ("The method is: "+ req.method); 
   res.send('<h1> <ul><li>Example of search engines <ul> <li>Google</li> <li>Bing</li> <li>Yandex</li> <li>Baidu</li> <li>...</li> </ul> </h1>'); 

})

// another route for "surprise" pictures
app.use('/surprise', function (req, res) {
 
  var random = Math.floor((Math.random() * 10) + 1);
  var file = path.join(__dirname + "/images/" + random+ ".jpg"); 
  console.log (file); 
  res.sendFile(file, {headers: {'Content-Type': 'image/jpeg'}})


})

console.log ("New server started, and listening at port "+port);
