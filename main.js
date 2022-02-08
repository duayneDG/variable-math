/* 
#### `future-age.js`

Create a variable called `age` and set its value to your age. Now, write another line of code that logs out a sentence telling you how old you will be in five years.
 */

let age = 39;
console.log(`I am ${age} years old.`)

/* 
#### `adder.js`
Create two variables, `num1` and `num2`. Store any numbers in the variables. 
Below this, add `num1` and `num2` together and store the result in a new variable (name it whatever you want).
Finlly, log out `num1`, `num2`, and `sum` in a human readable sentence (i.e.: "8 and 5 add to 13").
*/

let num1 = 7;
let num2 = 14;
let sum = num1 + num2;

console.log(`The sum of ${num1} + ${num2} ='s ${sum}`)

/*
#### `greeter.js`
Create a variable `name` and store your name in it.
Below this, write a line of code that displays some greeting to that name (i.e.: "Hello Barry!")
*/

const greeterName = "Duayne"; 
console.log(`Welcome to Coding, ${greeterName}`)

/*
#### `remainder.js`
Create two variables that each store a positive number (name them anything you want, any positive numbers will do).
Log out how the remainder that is left over when the first number is divided by the second number (i.e.: "the remainder of 7 divided by 3 is 1")
 */

let Rnum1 = 3;
let Rnum2 = 5;
let remainder = 3 % 5; 

console.log(`The remainder when 5 is divided by the number of times three can be divisible as a whole is: ${remainder}`); 

/*
#### `distance.js`

Create four variables, `x1`, `y1`, `x2`, and `y2` and store numbers in each of them.

Calculate the distance between coordinates (x1, y1) and (x2, y2). Log this distance out to the user in a human readable sentence.

The distance formula along with an example can be found below.

<img src="https://cdn.tutors.com/assets/images/courses/math/geometry-help/tutors-how-to-use-the-distance-formula.jpg" width="400px"/> 
*/

let x1 = 1;
let y1 = 3;

let x2 = 7;
let y2 = 6;

let distance_squared = Math.pow((x2 - x1), 2) + Math.pow((y2 -y1), 2); 
let distance = Math.sqrt(distance_squared)
console.log(distance)

/*
## Bonus

#### `quadratic.js`

Create three variables, `a`, `b`, and `c`.
Set them to any numbers you please as long as:
* a is not zero
* `b²` is greater than or equal to `4 × a × c`
Now use the quadratic formula (oh no) to calculate two value of two new variables, `x1` and `x2`.
<img src="https://i.ytimg.com/vi/lhQKfuAVkm4/maxresdefault.jpg" width="400px" />
Note: you'll need to do the formula twice. For `x1`, use a + in place of the ± symbol. For `x2`, use a -.
*/

let a = 5;
let b = 9;
let c = 3;

console.log(typeof(c))

// Quadratic equation b+

let numerator_Plus_b = ((Math.sqrt(Math.pow(b, 2) - (4 * a * c))) + b) / (2 * a);
console.log(numerator_Plus_b)

let numerator_Minus_b = ((Math.sqrt(Math.pow(b, 2) - (4 * a * c))) - b) / (2 * a); 
console.log(numerator_Minus_b)

console.log(`x ='s ${numerator_Plus_b} and ${numerator_Minus_b}`)



