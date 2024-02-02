//array

const userRole = ["user", "manager", "vendor"];

const sysRole = ["admin", "vendor"];

const checkRole = (ur, sr) => sr.some((role) => ur.includes(role));
console.log(checkRole(userRole, sysRole));

/// function to sum array

const arrySum = [1, 2, 3, 4, 5];

const sumArray = (g) => {
  let sum = 0;

  g.forEach((x) => {
    sum += x;
  });

  return sum;
};

console.log(sumArray(arrySum));
// using reduce

sumReduce = (numbers) => {
  return numbers.reduce((pre, cur) => pre + cur, 0);
};

const sums = sumReduce(arrySum);
console.log(sums);

///slugger
const slugger = (word) =>
  word
    .toString()
    .toLowerCase()
    .replaceAll(/!@#$%^&"'*()_+/g, "")
    .replaceAll(" ", "-");

console.log(slugger("my name is pujan poudel"));

//paginations

const pages = ["one", "two", "three", "four", "five", "six"];
const page = 1;
const limit = 2;

const pagesN = () => {};

console.log(pagesN());
/// check username and pass form database , return boolen if username and pass matched in dbs

const dbs = [
  { username: "pujan", pass: "pass1" },
  { username: "raktim", pass: "pass2" },
  { username: "pawan", pass: "pass3" },
  { username: "binamra", pass: "pass4" },
];

const checkUser = (user, pass) => {
  const result = dbs.find((data) => data.username === user);
  if (!result) {
    console.log("user not found");
  } else if (result.username === user && result.pass === pass) {
    console.log("username and pass found");
  } else {
    console.log("username and pass mismatched");
  }
};
console.log(checkUser("pujan", "pass1"));
