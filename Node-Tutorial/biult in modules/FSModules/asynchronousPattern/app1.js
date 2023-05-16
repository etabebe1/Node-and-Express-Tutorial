// In this topic we will see how to not nest a callback in to callback
// Rather how to write a cleaner syntax

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    // BLOCKING CODE
    for (i = 0; i < 1000; i++) {
      for (j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }

    res.end("About Page");
  }

  res.end("Error Page");
});

server.listen(5002, () => {
  console.log("Server listens on port: 5002...");
});
