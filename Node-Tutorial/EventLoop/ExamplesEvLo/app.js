const { readFile } = require("fs");

console.log("Hello here is the first text");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
  console.log("completed the first task");
});

console.log("starting the next task");

// On the console readFile is asynchronous therefore, it'll run lastly ==> that indicated the Event Loop offload the FileSystem(FS)
// EventLoop - works here --> Offload FS only when we got the result --> run the callback
