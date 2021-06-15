expect = require('chai').expect // import chai for assertion (after having installed it with npm install)

const  {sum, multiply} = require("./server-code") // import the server code to be tested, and then the functions of interest

describe ("my first test", () => 
{
    it ("should return an appropriate value for sums", () =>
    {

        expect(sum(1, 2)).to.deep.equal(3)
    })

    it ("should return an appropriate value for multiplications", () => 
    {
        expect(multiply(2, 6)).to.equal(12)
    })
})

