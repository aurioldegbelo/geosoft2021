const chai = window.chai
const expect = chai.expect

console.log(sum(1,2))

describe ("my first test", () => 
{
    it ("should return an appropriate value for sums", () =>
    {
        expect(sum(1, 2)).to.deep.equal(3)
    })

    it ("should return an appropriate value for multiplications", () => 
    {
        expect(multiply(2, 6)).to.equal(11)
    })
})