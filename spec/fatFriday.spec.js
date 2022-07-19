const fatFriday = require("../src/fatFriday/solution.js")

describe("fatFriday tests", () => {
    
    it("fatFriday user3566", () => {
        const user3566 = [
            {date: "28/01/2022", calories: 2808},
            {date: "04/02/2022", calories: 1481},
            {date: "11/02/2022", calories: 1367},
            {date: "18/02/2022", calories: 1204},
            {date: "25/02/2022", calories: 2055},
            {date: "04/03/2022", calories: 1640}
        ]
        expect(fatFriday(user3566)).toEqual({ date: '25/02/2022', calories: 2055 })
    })

    it("fatFriday user0599", () => {
        const user0599 = [
            {date: "28/01/2022", calories: 1568},
            {date: "04/02/2022", calories: 1613},
            {date: "11/02/2022", calories: 1215},
            {date: "18/02/2022", calories: 1869},
            {date: "25/02/2022", calories: 1265},
            {date: "04/03/2022", calories: 1468}
        ]
        expect(fatFriday(user0599)).toEqual("Well done")
    })
})
