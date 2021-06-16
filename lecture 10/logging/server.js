// npm install jsnlog
// npm install jsnlog-nodejs

// npm install express
// npm install serve-static
// npm install body-parser

// load necessary modules to run the server
var JL = require('jsnlog').JL
var jsnlog_nodejs = require('jsnlog-nodejs').jsnlog_nodejs

const express = require('express')
const serveStatic = require('serve-static');
const bodyParser = require('body-parser'); 

const app = express()
const port = 3000

// A log to the server
JL("ServerLogs").info("JSNLOG: This is an info message from the server")

// server static data (e.g. the jsnlog.js file)
app.use(serveStatic('public'))


app.get('/', (req, res) => 
{
  res.send('Hello World!')
})



// -------------------------------
// Receive and process log messages from the client

// parse application/json.
// Log messages from the client use POST and have a JSON object in the body.
// Ensure that those objects get parsed correctly.
app.use(bodyParser.json())

// jsnlog.js on the client by default sends log messages to jsnlog.logger, using POST.
app.post('*.logger', function (req, res) 
{ 

    console.log(req.url)
    // Process incoming log messages, by handing to the server side jsnlog.
    // JL is the object that you got at
    // var JL = require('jsnlog').JL;
   // jsnlog_nodejs(JL, req.body)

    console.log(req.body)
 // JL("ServerLogs").info(req.body)

    // Send empty response. This is ok, because client side jsnlog does not use response from server.
    res.send('')
})





app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})

