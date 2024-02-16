//The reduce() method executes a reducer function (that you provide) on each
//element of the array, resulting in single output value.

//The reducer function takes four arguements:

//1-> Accumlator
//2-> Current Value
//3-> Source Array

let arr = [1, 2, 3, 4, 5, 5];
let sum = arr.reduce((accum, curr) => {
  return accum + curr;
});
console.log(sum);
