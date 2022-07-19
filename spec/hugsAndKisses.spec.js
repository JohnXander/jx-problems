const hugsAndKisses = require("../src/hugsAndKisses/solution.js")

describe("hugsAndKisses tests", () => {
    
    it("standard", () => {
        expect(hugsAndKisses(3, 1, 2)).toEqual([ 'O', 'X', 'O' ])
    })

    it("backwards", () => {
        expect(hugsAndKisses(5, -4, -1)).toEqual([ 'O', 'X', 'X', 'X', 'O' ])
    })

    it("invalid endpoint", () => {
        expect(hugsAndKisses(5, 4, 1)).toEqual([ 'O', 'O', 'O', 'O', 'O' ])
    })
})
