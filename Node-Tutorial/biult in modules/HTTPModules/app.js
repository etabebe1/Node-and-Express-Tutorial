// The following method is how we can setup our webserver

const http = require("http");
const server = http.createServer((request, respond) => {
  if (request.url === "/") {
    respond.end(`
    <h1>Welcome to our webpage</h1>
    <a href="/about">about</a>
    ` );
  }
  if (request.url === "/about") {
    respond.end("<h3>This is who we are full time programmer</h3>");
  }
  respond.end(`
            <h1>Oops!</h1>
             <p>The page you're looking for doesn't exist</p>
             <a href="/">back home</a>`);
});

server.listen(5000);
