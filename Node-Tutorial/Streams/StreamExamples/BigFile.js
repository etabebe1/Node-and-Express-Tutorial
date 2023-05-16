// In this example we are getting big our big file in ==> StreamExample ./content/big.txt
const { writeFileSync } = require("fs");
for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/big.txt", `hello world ${i}`, { flag: "a" });
}
