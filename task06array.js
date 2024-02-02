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
