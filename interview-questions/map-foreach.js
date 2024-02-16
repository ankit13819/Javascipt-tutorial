//🙏Most Asked JavaScript Interview Question-Difference between map() and forEach()
//Map method-receives a function as a parameter with each element and return a new array.

let arr = [1, 5, 6, 7, 8, 9];
arr = arr.map((e) => {
  return e * e;
});
// console.log(arr);

//Array.forEach()->forEach() method receives a function as an argument and executes
//it once for each element present in the array. However, instead of returning a new array (like in the case of map),
//it returns undefined.

let arr1 = [1, 2, 3, 4, 5, 6];
arr1 = arr1.forEach((item) => {
  return item * item;
});
console.log(arr1);
