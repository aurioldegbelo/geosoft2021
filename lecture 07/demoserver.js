
// basic version
let http = require('http') // use an existing module from node

console.log("hello")

let server = http.createServer(handleRequest) // create a server

server.listen(3000) // say where the server should listen

/*
// say what the server should do, when it gets an incoming request
function handleRequest (request, response)
{
    console.log(request)
   	console.log(response)
  
}
*/

function handleRequest (request, res)
{
    console.log(request.url)
   
    if(request.url === "/")
    {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write ("We are on the main page")
        res.end()

    } else if (request.url === "/index.html")
    {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write ("We are on the index.html page")
        res.end()
    }
    else if  (request.url === "/longerroute/main.html")
    {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write ("We are on the /longerroute/main.html page")
        res.end()
    }
}
//alert("This is an important message")
/*
// Expanded Version
let http = require('http') // use an existing module from node
let host = "localhost" // 127.0.0.1
let port = 5000

let server = http.createServer(handleRequest) // create a server

server.listen(port, host) // say where the server should listen

// say what the server should do, when it gets an incoming request
function handleRequest (req, res)
{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write ("Hellooooooo")
    res.end()
}

console.log(`Server is running on ${host}:${port}`)
*/


/*
// Shorter Version 
let http = require('http') // use an existing module from node
let host = "localhost" // 127.0.0.1
let port = 5000

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write ("Hellooooooo")
    res.end()
}).listen(port, host)

console.log(`Server is running on ${host}:${port}`)
*/

/*
function handleRequest (request, response)
{
    console.log(request)
   	//console.log(response)
    if (request.url === "index.html")
    {
        
    }

}


*/