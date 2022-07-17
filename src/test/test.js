// You will be given 3 numbers.
// The first number is the length of your return array which should be populated by the letter "X".
// The second number is the index where the array should stop showing "X"s, and show "O"s instead.
// The third number is the index where the array should stop showing "O"s and go back to showing "X"s.

// test(5, 1, 4) should return [ 'X', 'O', 'O', 'O', 'X' ]
// test(5, 3, 2) should return [ 'X', 'X', 'X', 'X', 'X' ]
// test(5, -3, -2) should return [ 'X', 'X', 'O', 'X', 'X' ]

const test = (len, start, end) => Array(len).fill("O").fill("X", start, end)

console.log(test(5, -3, -2))


const chunkOfXs = () => {

}