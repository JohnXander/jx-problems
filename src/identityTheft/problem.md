# Identity Theft 🚓

🏷️ **DESCRIPTION**

- You will be given 3 parameters (2 array indices & 1 array).
- The element at the first array index should replace the element at the second array index.

🖊️ **NOTES**

1. If the index is negative, it should be counted backwards from the end of the array.

⚡ **EXAMPLES**

`identityTheft(3, 0, ['a', 'b', 'c', 'd', 'e'])` should return `[ 'd', 'b', 'c', 'd', 'e' ]` <br>
because the element at index 3 is "d" and the element at index 0 is "a", so "d" replaces "a". <br>

`identityTheft(-3, -2, ['a', 'b', 'c', 'd', 'e'])` should return `[ 'a', 'b', 'c', 'c', 'e' ]` <br>
because the 3rd element from the end of the array is "c" and the 2nd element from the end of the array is "d",
so "c" replaces "d".
