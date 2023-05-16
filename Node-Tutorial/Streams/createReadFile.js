// const { createReadStream } = require("fs");
//  stream = createReadStream("./content/big.txt");

const fs = require("fs");
// const stream = fs.createReadStream("./content/big.txt");

// stream.on("data", (chunk) => {
//   console.log(chunk.length);
//   console.log(chunk);
// });

// Here we can notice that we are reading data in chunks ---> it is 65kb
// Instead of reading everything and placing in a variable, ---> we are doing this in chunks

/* Also here are additional infos */
//||\\ ==> 64kb --is default, however we can control it by passing an object in to readable file
// Example
// const stream = fs.createReadStream("./content/big.txt", {highWaterMark: 90000});

// we can input the encoding of file as well.
// Example
const stream = fs.createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});
stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("error", (err) => {
  console.log(err);
});

//||\\ ==> last buffer -- is remainder
//||// ==> highWaterMark -- controls size
