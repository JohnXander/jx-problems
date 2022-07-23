const profileUpdate = require("../src/profileUpdate/solution.js")

describe("profileUpdate tests", () => {
    
    it("amelia", () => {
        const signUpData = {
            name: "Amelia",
            surname: "Shaw",
            gender: "F",
            age: 25,
            nationality: "British"
        }
        
        const updatedData = {
            surname: "Davies",
            age: 28,
            occupation: "Junior Developer"
        }

        const expected = {
            name: 'Amelia',
            surname: 'Davies',
            gender: 'F',
            age: 28,
            nationality: 'British',
            occupation: 'Junior Developer'
        }

        expect(profileUpdate(signUpData, updatedData)).toEqual(expected)
    })

})
