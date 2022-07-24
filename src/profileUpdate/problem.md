# Profile Update 👤

🏷️ **DESCRIPTION**

- You will be given 2 objects containing data about a user.
- The 1st object is the user's original sign-up information from 3 years ago.
- The 2nd object contains updated information from today.
- Your function should return 1 object that includes both original and updated information.

🖊️ **NOTES**

1. Some of the properties in the updated data may not have existed in the original data.

⚡ **EXAMPLES**

```js
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
```

`profileUpdate(signUpData, updatedData)` should return:

```js
{
  name: 'Amelia',
  surname: 'Davies',
  gender: 'F',
  age: 28,
  nationality: 'British',
  occupation: 'Junior Developer'
}
```
