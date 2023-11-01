for (let index = 0; index <= 10; index++) {
  const element = index;
  //   console.log(element);
}

//2nd questions

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //     console.log("5 is best number");
  }
  //   console.log(element);
}

//Best case for inner and outer loop

for (let i = 0; i <= 10; i++) {
  console.log(`The outer loop is ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`The Inner loop is ${i} and ${j} `);
    console.log(i + "*" + j + " " + "=" + i * j);
  }
}

//break and continue

for (let index = 0; index <= 20; index++) {
  if (index == 5) {
    console.log(`5 is Detected`);
    break;
  }
  console.log(index);
}

//continue- ek bar condition ko maf kr deta hai
