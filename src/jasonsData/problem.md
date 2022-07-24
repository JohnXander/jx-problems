# Jason's Data 🧑🏽‍🎤

🏷️ **DESCRIPTION**

- You will be given an object containing data about a famous Jason.
- Create a function that turns all of his data into a single string with no spaces.
- Object keys and strings should be surrounded by double quotes.
- Booleans, numbers and null values should not be surrounded by double quotes.
- Undefined values should be omitted entirely.

🖊️ **NOTES**

1. The string should also keep any punctuation marks from the data.

⚡ **EXAMPLES**

```js
const jasonStatham = {
    actor: true,
    singingCareer: undefined,
    productions: ["Crank", "The Meg"]
}
```

`jasonsData(jasonStatham)` should return: `{"actor":true,"productions":["Crank","The Meg"]}`

```js
const jasonDerulo = {
    surname: "Derulo",
    age: 32,
    image: null
}
```

`jasonsData(jasonDerulo)` should return: `{"surname":"Derulo","age":32,"image":null}`
