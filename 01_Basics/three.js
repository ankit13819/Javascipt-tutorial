//for of

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //   console.log(`The number is ${num}`);
}

//taking with string

const greetings = "Hello World!";
for (const greet of greetings) {
  //   console.log(`The stirng is ${greet}`);
}

//Map

const map = new Map();
map.set("IN", "INDIA");
map.set("US", "AMERICA");
map.set("FR", "FRANCH");
for (const [mapShow, value] of map) {
  console.log(mapShow + ":-" + value);
}
