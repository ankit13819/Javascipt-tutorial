const arrowMethod = {
  userName: "ankit",
  password: 12345,
  welcomMessage: function () {
    //execute current context
    //     console.log(`${this.userName} website`);
    //     console.log(this);
  },
};

arrowMethod.welcomMessage();
arrowMethod.userName = "Anshu";
// console.log(arrowMethod.userName);
// console.log(arrowMethod);

// function chai() {
//   let = "ankita";
//   console.log(this.username);
// }
// chai();

//this above function give undefined
//but this keyword give object

const chai = () => {
  let username = "ankita";
  console.log(this);
};
chai();
//this also gives undefined
//this keyword only gives {}

// const addTwo = (num1, num2) => {
//   num1 + num2;
// };
// console.log(addTwo(3, 4)); //undefined
const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(3, 4));
