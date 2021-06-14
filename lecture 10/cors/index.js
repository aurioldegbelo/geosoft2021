// jshint esversion: 6
// jshint node: true
"use strict";

// usage:
// $ npm init
// $ npm install --save express cors
// $ node .
// -> open in browser: http://localhost:4000/
/* 
Original code by Matthias Seuter
1. Open https://github.com/streuselcake/jslab/tree/master/webserver-express
2. Then go to the folder "cors-package"

*/

const express = require("express")
const cors = require("cors")
const app = express()
const port = 4000

var loc = {
  "latitude": 51.969431,
  "longitude": 7.595707,
}

// middleware for handling json request data
// https://expressjs.com/en/4x/api.html#express.json
app.use(express.json())


// middleware for handling urlencoded request data
// https://expressjs.com/en/4x/api.html#express.urlencoded
//app.use(express.urlencoded({ extended: false }));

// set cors headers for me... (including preflight on all routes!)
// https://expressjs.com/en/resources/middleware/cors.html
//app.use(cors())

app.get("/echo.html",  (req, res, next) => {

  // return location as a json data
  console.log("echo.html request");
  res.json(loc);

})


/*
 // Alternatively, enable pre-flight request for echo request only
 app.options('/echo.html', cors()) // enable pre-flight request for GET request
 app.get("/echo.html", cors(), function (req, res) 
 {
  // return location as a json data
  console.log("echo.html request")
  res.json(loc)

 })
*/


//var server =
app.listen(port, () => console.log("Example app listening on port " + port + "!"));