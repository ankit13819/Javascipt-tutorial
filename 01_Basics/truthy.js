const userEmail = "";

if (userEmail) {
  console.log("User email is logged in");
} else {
  console.log("Don't have the email");
}

//falsy values ->

//0, -0, null, NaN, false, BigInt On, Undefined, ""

//truthy values ->

//"0", " ", "false", [], function(){}, {}

if (userEmail.length === 0) {
  console.log("User Email is Empty");
}
