// The previous is asynchronous pattern mode which uses nested callback functions
// In the Asynchronous-Pattern --> our code is pretty similar with Asynchronous  FSModules in the current folder
// However, we use promise --> Or it will be async_await. which makes our code more clean and readable

// const { readFile, writeFile } = require("fs");

//Using promises
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/* Calling our promise for only one text above we got */
// getText("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

/* Calling our promise using async_await for two text we got form readFile */
const startReading = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

// startReading();

// Bellow is using util Module of node js

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

/* We can even escape the above util method like these bellow */
// Bellow is the better one to write clean and readable code

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    // const first = await readFilePromise("./content/first.txt", "utf8");
    // const second = await readFilePromise("./content/second.txt", "utf8");
    // const fourth = await writeFilePromise(
    //   "./content/fourth.txt",
    //   `this is the forth text including the first::: ${first}`
    // );
    const first = await readFile("./content/first.txt", "utf8");
    await writeFile(
      "./content/fourth.txt",
      `this is the forth text including the first::: ${first}`
    );
    const fourth = await readFile("./content/fourth.txt", "utf8");

    console.log(
      `Here we go our text is:: ${first} and ${fourth} to create the fourth text`
    );
  } catch (err) {
    console.log(err);
  }
};

start();

/* Conclusion */
// Rather than nesting callback function in to another callback function
// Using one of the above methods will be pretty to good to write clean and readable code.
