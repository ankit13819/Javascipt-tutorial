//Hoisting is JavaScript's default behavior of moving declarations to the top.

//Another definition->Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

//Example 1 gives the same result as Example 2:

//Example 1
x = 5; //Assign 5 to x
console.log(x); //display
var x; //Declare x

//Example 2
var y; // Declare x
y = 5; // Assign 5 to x
console.log(y); //display

//The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.

//Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

//Using a let variable before it is declared will result in a ReferenceError.

//The variable is in a "temporal dead zone" from the start of the block until it is declared:

// carName = "Volvo";
// let carName;
// console.log(carName);

//This will result in a ReferenceError

// Using a const variable before it is declared, is a syntax error, so the code will simply not run.

// carName1 = "Volvo";
//const carName1; //'const' declarations must be initialized.
//This code will not run.

// JavaScript Initializations are Not Hoisted
//JavaScript only hoists declarations, not initializations.

//Example 1 does not give the same result as Example 2:
//Example 1

//Not Hoisted=intialization
var x = 5; // Initialize x
var y = 7; // Initialize y
console.log(x);
console.log(y);

var a = 5; // Initialize a
console.log(a + " " + b);
var b = 7; // Initialize b

//Does it make sense that y is undefined in the last example?

//Hoisted=Declaration
var c = 5;
var d;

console.log(c + " " + d);
d = 7;
