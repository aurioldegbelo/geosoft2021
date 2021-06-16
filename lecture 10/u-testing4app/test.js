// npm install --save got
// npm install --save-dev jest

let got = require("got") // got is an alternative to request that is no longer maintained, see https://nodesource.com/blog/express-going-into-maintenance-mode
let keys = require("./keys.js") // to load my keys
let port = 4000


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
       expect(response.headers['content-type']).toBe("text/html; charset=utf-8")

   })
    
    let urlAdd = `http://localhost:${port}/add/newpoi`

    test("/add route: check if post request is fine", async () =>
    {
       const request = await got.post(urlAdd)   
      // console.log(request.statusCode)
       expect(request.statusCode).toBe(200)
   })
    
})

describe ("Place API Testing", () => {

    // put lat/long of Münster (or another place)
    let lat = 51.9625
    let long = 7.625556

    test ("API returns result", async() => {

        let dataurl = `https://places.ls.hereapi.com/places/v1/discover/explore?at=${lat}%2C${long}&cat=sights-museums&apiKey=${keys.hereKey}`
        let res = await got(dataurl)
     //   console.log(res.statusCode)
        expect(res.statusMessage).toBe("OK")   

    })
 

})

// to generate coverage file with jest: npm test -- --coverage