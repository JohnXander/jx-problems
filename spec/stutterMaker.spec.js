const stutterMaker = require("../src/stutterMaker/solution.js")

describe("stutterMaker tests", () => {
    
    it("5 letter word", () => {
        expect(stutterMaker(20, ["ea-", "eager"])).toEqual("ea-ea-ea-ea-ea-eager")
    })

    it("10 letter word", () => {
        expect(stutterMaker(20, ["st-", "strawberry"])).toEqual("st-st-st-sstrawberry")
    })

    it("15 letter word", () => {
        expect(stutterMaker(20, ["pr-", "procrastination"])).toEqual("pr-prprocrastination")
    })
})
