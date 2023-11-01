console.log("Play with functions");

function addOne(num) {
  console.log(`hello ${num}`);
  function addTwo(name) {
    console.log(`hey ${name}`);
    console.log(`hello ${num}`);
  }

  addTwo("ankit");
}
addOne(5);
