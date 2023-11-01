//forEach

const coding = ["JS", "Ruby", "PHP", "Python", "C++"];
coding.forEach(function (item) {
  console.log(item);
});

//=> function
coding.forEach((val) => {
  console.log(val);
});

function name(value) {
  console.log(value);
}
coding.forEach(name);
