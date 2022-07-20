const acronymizer = require("../src/acronymizer/solution.js")

describe("acronymizer tests", () => {
    
    it("standard", () => {
        const phrases = [
            "Laugh Out Loud",
            "Oh My God",
            "As Soon As Possible"
        ]

        expect(acronymizer(phrases)).toEqual([ 'LOL', 'OMG', 'ASAP' ])
    })

    it("camel case", () => {
        const techPhrases = [
            "GraphicsInterchangeFormat",
            "InternetProtocol",
            "AwayFromKeyboar"
        ]

        expect(acronymizer(techPhrases)).toEqual([ 'GIF', 'IP', 'AFK' ])
    })

})
