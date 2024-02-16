//The Difference between apply,bind and call method

//firstly let's discuss what is this keyword

//this -allow to access the object as a properties
//And this is different type called oject
//And access this object call by function method not only value

//🍁example1
const user = {
  firstname: "Ankit",
  lastName: "Gupta",
  fullName: function () {
    console.log(`My name is ${this.firstname} ${this.lastName}`);
  },
};
console.log(user.fullName());

//🍁example2

const user1 = {
  firstname: "Shubham",
  lastName: "Gupta",
};

const user2 = {
  firstname: "Amit",
  lastName: "Kumar",
};

function fullName1() {
  console.log(
    `this is another method call when you have more than one object '\n'  Name is ${this.firstname} ${this.lastName}`
  );
}
user1.fullName1 = fullName1;
user2.fullName1 = fullName1;

user1.fullName1();
user2.fullName1();

//call method-It allow to method, function relatively to one object and access other object

const callUser = {
  name: "Ankit",
  age: 23,
};

const callUser1 = {
  name: "Ankita",
  age: 23,
  callFunction: function (city) {
    console.log(
      `My name is ${this.name} and age is ${this.age} and our city is ${city}`
    );
  },
};
callUser1.callFunction.call(callUser, "Ayodhya");

//apply method -it analogous of call but immediatly call function and let specify with this keyword
//but it access parameter with array

const applyUser = {
  name: "Ankita",
  age: 24,
};

const appplyUser1 = {
  name: "Anshu",
  age: 28,
  applyFunction: function (city) {
    console.log(
      `my name is ${this.name} and age is ${this.age} and our city is ${city}`
    );
  },
};

appplyUser1.applyFunction.apply(applyUser, ["Ayodhya"]);

//bind method- little bit different from apply and call method invoking the function and return a new function

const bindUser = {
  name: "Anil",
};
const bindUser1 = {
  name: "Aniket",
  bindFunction: function (city) {
    console.log(`my name is ${this.name} and city is ${city}`);
  },
};

let newFunction = bindUser1.bindFunction.bind(bindUser); //bind method
newFunction("Haldwani");

//constructing a custom value for this

//create a function and use custom this value with apply ,call and bind also

function sayHello(greeting) {
  return `${greeting}, ${this.name}`;
}

const userName = {
  name: "Shalini",
};

//call method
console.log(sayHello.call(userName, "Hello"));

//apply method
console.log(sayHello.apply(userName, ["Hey"]));

//bind method
let newSayHello = sayHello.bind(userName);
console.log(newSayHello("Hi"));

//conclusion
//The differences between call, apply and bind
//Both call method and apply method invokes a function
//🤫call accepts arguments in a (comma-separated )fashion
//🤫apply method, the requiring arguments need to be passed as an array or
// an array-like object.
//🤫Bind returns a new function.
