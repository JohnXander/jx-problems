const fatFriday = require("../src/fatFriday/solution.js")

describe("fatFriday", () => {
    it("Test to see if it's working", () => {
        expect(fatFriday()).toEqual("Is this working?")
    })
})