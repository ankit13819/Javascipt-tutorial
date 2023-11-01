//for in

const myObject = {
  JS: "Javascript",
  cpp: "C++",
  py: "Python",
};

for (const obj in myObject) {
  console.log(`The object is ${obj} and ${myObject[obj]}`);
}
