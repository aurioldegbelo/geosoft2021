// npm install --save got
// npm install --save-dev jest

let got = require("got") // got is an alternative to request that is no longer maintained, see https://nodesource.com/blog/express-going-into-maintenance-mode
let port = 4000

//import A from '../public/javascripts/searchUtilities'
const  {myHereAPIKey} = require("./public/javascripts/apiKeys.js")
console.log(myHereAPIKey)


//console.log(geojson)

describe ("Route testing", () => // define a suite of tests
{

    let urlSearch = `http://localhost:${port}/search`

    test("/search route: returns status 200", async () =>
     {
        const response = await got(urlSearch)   
        expect(response.statusCode).toBe(200)
    })

    test("/search route: check content type", async () =>
    {
       const response = await got(urlSearch)   
     //  console.log(response.headers['content-type'])
      // expect(response.headers['content-type']).toBe("text/html; charset=utf-8")
       expect(response.headers['content-type']).toBe("text/html")

   })
    
    let urlAdd = `http://localhost:${port}/add/newpoi`

    test("/add route: check request status", async () =>
    {
       const request = await got.post(urlAdd)   
      // console.log(request.statusCode)
       expect(request.statusCode).toBe(200)
   })
    
})


describe ("Place API Testing", () => {

    let lat = 0
    let long = 0

    test ("API returns result", async() => {

        let dataurl = `https://places.ls.hereapi.com/places/v1/discover/explore?at=${lat}%2C${long}&cat=sights-museums&apiKey=${myHereAPIKey}`
        let res = await fetch(dataurl)
        let data = await res.json()

    })
 

})