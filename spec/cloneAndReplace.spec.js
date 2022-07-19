const cloneAndReplace = require("../src/cloneAndReplace/solution.js")

describe("cloneAndReplace tests", () => {
    
    it("standard", () => {
        expect(cloneAndReplace(3, 0, ['a', 'b', 'c', 'd', 'e']))
            .toEqual(['d', 'b', 'c', 'd', 'e'])
    })

    it("backwards", () => {
        expect(cloneAndReplace(-3, -2, ['a', 'b', 'c', 'd', 'e']))
            .toEqual([ 'a', 'b', 'c', 'c', 'e' ])
    })
})
