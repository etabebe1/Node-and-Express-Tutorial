const http = require("http");

/* Previously we setup server like this */
// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// However, we can use event emitter API like bellow
server = http.createServer();
// here server emits request event

//then bellow we can listen/subscribe/respond for the event
server.on("request", (req, res) => {
  res.end(`<h1 style.color='blue'>Welcome</h1>`);
});

server.listen(5000, () => {
  console.log("Server listens at port : 5000...");
});
