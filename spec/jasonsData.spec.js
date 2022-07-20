const jasonsData = require("../src/jasonsData/solution.js")

describe("jasonsData tests", () => {
    
    it("statham", () => {
        const jasonStatham = {
            actor: true,
            singingCareer: undefined,
            productions: ["Crank", "The Meg"]
        }

        expect(jasonsData(jasonStatham))
            .toEqual('{"actor":true,"productions":["Crank","The Meg"]}')
    })

    it("derulo", () => {
        const jasonDerulo = {
            surname: "Derulo",
            age: 32,
            image: null
        }

        expect(jasonsData(jasonDerulo))
            .toEqual('{"surname":"Derulo","age":32,"image":null}')
    })

})
