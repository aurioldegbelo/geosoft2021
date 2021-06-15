const  {sum, multiply} = require("./server-code") // import the server code to be tested, and then the functions of interest


describe ("my first test", () => // define a suite of tests
{

    test ("should return an appropriate value for sums", () => // define a test
    {
        expect(sum(1, 2)).toBe(3)
    })

    /*
    test ("should return an appropriate value for multiplications", () => 
    {
        expect(multiply(2, 6)).toBe(12)
    })
    */
})
