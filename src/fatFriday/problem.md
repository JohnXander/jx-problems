# Fat Friday

🏷️ **DESCRIPTION**

- You will be given an array of data about a user from a diet tracker app.
- Each item in the array will contain the date (always Friday) and the calory intake for that day.
- Return the most recent Friday where the user's calory intake was above 2000.
- If the calory intake never went above 2000, return "Well done!".

🖊️ **NOTES**

1. The dates are always ordered from least recent to most recent.

⚡ **EXAMPLES**

```js
const user3566 = [
    {date: "28/01/2022", calories: 2808},
    {date: "04/02/2022", calories: 1481},
    {date: "11/02/2022", calories: 1367},
    {date: "18/02/2022", calories: 1204},
    {date: "25/02/2022", calories: 2055},
    {date: "04/03/2022", calories: 1640}
]
```

`fatFriday(user3566)` should return `{ date: '25/02/2022', calories: 2055 }` <br>
because February 25th was the most recent Friday where the calory intake was above 2000.

```js
const user0599 = [
    {date: "28/01/2022", calories: 1568},
    {date: "04/02/2022", calories: 1613},
    {date: "11/02/2022", calories: 1215},
    {date: "18/02/2022", calories: 1869},
    {date: "25/02/2022", calories: 1265},
    {date: "04/03/2022", calories: 1468}
]
```

`fatFriday(user0599)` should return `Well done!` <br>
because the calory intake never went above 2000.
