var request = require("request")

describe ("my first test", () => // define a suite of tests
{

    test ("should return an appropriate value for sums", () => // define a test
    {
        expect(sum(1, 2)).toBe(3)
    })

    var url = "http://localhost:3000/"

    it("returns status 200", function() {

      request(url, function(error, response, body) 
      {
        expect(response.statusCode).toBe(200);
      })
    })

})
