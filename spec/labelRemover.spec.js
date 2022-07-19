const labelRemover = require("../src/labelRemover/solution.js")

describe("labelRemover tests", () => {
    
    it("standard", () => {
        const quizResults = [
            { name: "Janet Williams", points: 15 },
            { name: "Julie Morgan", points: 87 },
            { name: "Jacob Anderson", points: 8 },
            { name: "Eric Green", points: 17 },
            { name: "Larry Hall", points: 96 }
        ]
        const expected = [
            { 'Janet Williams': 15 },
            { 'Julie Morgan': 87 },
            { 'Jacob Anderson': 8 },
            { 'Eric Green': 17 },
            { 'Larry Hall': 96 }
        ]
        
        expect(labelRemover(quizResults)).toEqual(expected)
    })
})
