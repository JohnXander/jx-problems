# Label Remover

🏷️ **DESCRIPTION**

- The organisers at a quiz event want to use less ink when printing out results.
- Please remove any instances of the word "name" or "points" from their results data.

🖊️ **NOTES**

1. The returned data must be an array of objects.

⚡ **EXAMPLES**

```js
const quizResults = [
    { name: "Janet Williams", points: 15 },
    { name: "Julie Morgan", points: 87 },
    { name: "Jacob Anderson", points: 8 },
    { name: "Eric Green", points: 17 },
    { name: "Larry Hall", points: 96 }
]
```

`labelRemover(quizResults)` should return:

```js
[
  { 'Janet Williams': 15 },
  { 'Julie Morgan': 87 },
  { 'Jacob Anderson': 8 },
  { 'Eric Green': 17 },
  { 'Larry Hall': 96 }
]
```
