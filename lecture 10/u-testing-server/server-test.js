// npm install --save-dev chai
// npm install mocha
// install the instanbul library for coverages https://istanbul.js.org/

expect = require('chai').expect // import chai for assertion (after having installed it with npm install)

const  {sum, multiply} = require("./server-code") // import the server code to be tested, and then the functions of interest

describe ("my first test", () => // define a suite of tests
{
    it ("should return an appropriate value for sums", () => // define a test
    {

        expect(sum(1, 2)).to.deep.equal(3)
    })

    it ("should return an appropriate value for multiplications", () => 
    {
        expect(multiply(2, 6)).to.equal(11)
    })
})

