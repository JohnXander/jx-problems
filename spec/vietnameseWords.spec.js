const vietnameseWords = require("../src/vietnameseWords/solution.js")

describe("vietnameseWords tests", () => {
    
    it("standard", () => {
        const words = ["ông", "được", "ăn", "mình", "từ"]
        const expected = [ 'ăn', 'được', 'mình', 'ông', 'từ' ]
        
        expect(vietnameseWords(words)).toEqual(expected)
    })
})
