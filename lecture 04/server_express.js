const express = require('express')
const port = 3000
const app = express()

console.clear()

app.get ('/', function(req, res)
{



})



app.listen(port, function(error)
{
    if(error)
    {
        console.log("Something went wrong", error)
    }
    else
    {
        console.log ("Server is listening on port", port)
    }
})