const identityTheft = require("../src/identityTheft/solution.js")

describe("identityTheft tests", () => {
    
    it("standard", () => {
        expect(identityTheft(3, 0, ['a', 'b', 'c', 'd', 'e']))
            .toEqual(['d', 'b', 'c', 'd', 'e'])
    })

    it("backwards", () => {
        expect(identityTheft(-3, -2, ['a', 'b', 'c', 'd', 'e']))
            .toEqual([ 'a', 'b', 'c', 'c', 'e' ])
    })
})
