# Piggy In The Middle

> DESCRIPTION

- You will be given a decimal number.
- Make sure there are the same amount of digits on either side of the decimal point.
- The result should be returned in string format.

> NOTES

1. If the decimal part is shortened, it should be rounded to the nearest integer.
2. If the decimal part is too short, zeros can be added to make up the difference.

> EXAMPLES

`piggyInTheMiddle(123.456)` should return `123.456` <br>

`piggyInTheMiddle(12.3456)` should return `12.35` <br>
because 34.56 rounded to the nearest integer is 35.

`piggyInTheMiddle(1234.56)` should return `1234.5600` <br>
because the decimal part was too short so 2 zeros were added.
