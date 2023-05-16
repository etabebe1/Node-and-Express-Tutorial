const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request event");
  res.end(`<h1>Hello Peoples</h1>`);
});

server.listen(5000, () => {
  console.log("Server Listens on port : 5000... ");
});

// here listen --> is asynchronous and
// Event loop is waiting the request to come in ==> then we run our callback function
