/* Asynchronous FS Modules */

// using a callBack function is necessary here which takes a parameter || as an argument
// Also in the asynchronous FSModules--> we use a  callBack Hell functions
// CallBack Hell functions have a property of executing a program in dependence of each other
// So let's see how it works in FSModules
// Notice the ((readFile))=> bellow reads a file and the ((writeFile)) => writes a file if file exist or creates a file
const { readFile, writeFile } = require("fs");

console.log("start");

const third = "this is text for third text";
readFile("./content/first.txt", "utf8", (err, result1) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result1;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, result2) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result2;
    console.log(second);

    writeFile(
      "./content/third.txt",
      `this is a file text for ${third}`,
      (err, result3) => {
        if (err) {
          console.log(err);
          return;
        }

        // console.log(result3);
        readFile("./content/third.txt", "utf8", (err, lastResult) => {
          if (err) {
            console.log(err);
            return;
          }
          const result4 = lastResult;
          console.log(result4);
          console.log("doing the following task");
        });
      }
    );
  });
});

console.log("done with the task");

console.log("start another task");

//here the code is  not been executed line by line. however, logs in the calBack hell functions delayed or executed after the execution of other logs

/* Conclusion */
// we have used a callBack-Hell function therefore, each log is executed one after another
// question here what if we use ((readFileSync and writeFileSync)) for asynchronous FS Modules
// Also for asynchronous js ==> we can use Promises || async await as alternative since using callBack functions is messy
