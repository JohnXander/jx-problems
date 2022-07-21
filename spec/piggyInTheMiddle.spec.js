const piggyInTheMiddle = require("../src/piggyInTheMiddle/solution.js")

describe("piggyInTheMiddle tests", () => {
    
    it("symmetrical", () => {
        expect(piggyInTheMiddle(123.456)).toEqual("123.456")
    })

    it("decimal part shortened", () => {
        expect(piggyInTheMiddle(12.3456)).toEqual("12.35")
    })

    it("decimal part too short", () => {
        expect(piggyInTheMiddle(1234.56)).toEqual("1234.5600")
    })

})
