const { createReadStream } = require("fs");
const stream = createReadStream("./content/big.txt");
stream.on("data", (chunk) => {
  console.log(chunk);
});
