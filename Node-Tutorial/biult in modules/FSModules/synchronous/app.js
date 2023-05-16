const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf8");
const third = readFileSync("./content/third.txt", "utf8");

console.log("start");
// console.log(`the first sentence is ${first} and the second one is ${second}`);
// console.log(`${first} and ${second}`);
console.log(` the text in the third.txt is ${third}`);

writeFileSync(
  "./content/third.txt",
  `the result would be: ${first} and ${second}`
);
writeFileSync(
  "./content/third.txt",
  `may be the result would be: ${first} and ${second}`
);

console.log(readFileSync("./content/third.txt", "utf8"));

console.log("done with the task");
// writeFileSync(
//   "./content/third.txt",
//   ` when we append a file the result would be: 2 ${first} and ${second}`,
//   { flag: "a" }
// );

// console.log(readFileSync("./content/third.txt", "utf8"));

console.log("start another task");


//here the code is been executed line by line 