# Hugs & Kisses

> DESCRIPTION

- You will be given 3 numbers (an array length, a starting point, and an endpoint).
- Your return array should be the correct length and populated by hugs ("O").
- However, anything from the starting point index to the endpoint index should be a kiss ("X").

> NOTES

1. If the index is negative, it should be counted backwards from the end of the array.
2. If the endpoint is the same as or lower than the starting point, there should be no kisses.

> EXAMPLES

`hugsAndKisses(3, 1, 2)` should return `[ 'O', 'X', 'O' ]` <br>

`hugsAndKisses(5, -4, -1)` should return `[ 'O', 'X', 'X', 'X', 'O' ]` <br>
because the 4th index from the end of the array is index 1 and the 1st index from the end of the array is index 4.

`hugsAndKisses(5, 4, 1)` should return `[ 'O', 'O', 'O', 'O', 'O' ]` <br>
because the endpoint is lower than the starting point.
