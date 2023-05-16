// Starting the operating system process
console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
// completed and exiting the operating system process

// here setTimeout() ---> is asynchronous and
// the other synchronous are offloaded
