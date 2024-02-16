console.log("I will call you back later");
//callback->callback method is a function passed as a arguement to another function
//It can run after another function has finished

//Function Sequence -> executed in the sequence they are called.

//Example-will end up displaying "Goodbye"

//create myDisplayer function
function myDisplayer(some) {
  console.log("hey displayer", some);
}

//create first function
function myFirst() {
  //call first displayer function
  myDisplayer("Hello");
}

//create second function
function mySecond() {
  //call second displayer
  myDisplayer("Good bye");
}

//call function with sequencially
myFirst();
mySecond();

//There are two ways -callback called->
//Synchronous and Asynchronous method

//Synchronous callback->it called immediately after the invocation of the outer function
//Asynchronous callback->it called at some point later,after an asynchronous operation has completed.

//Understanding wheater the callback is sync or async🧒🧒

//example
let value = 1;

doSomething(() => {
  value = 2;
});
console.log(value);

//If doSomething calls the callback synchronously, then the last statement would log 2 
//because value = 2 is synchronously executed; otherwise, if the callback is asynchronous, the last statement 
//would log 1 because value = 2 is only executed after the console.log statement.

//Concepts->
//Asynchronous programming 