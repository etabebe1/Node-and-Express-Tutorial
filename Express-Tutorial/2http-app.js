const http = require("http");

const { readFileSync } = require("fs");
// get all the necessary file from the right path
const aboutPage = readFileSync("./about.html");
const homePage = readFileSync("./Nav-Bar/index.html");
const homeStyle = readFileSync("./Nav-Bar/style.css");
const homeLogo = readFileSync("./Nav-Bar/logo.svg");
const homeLogic = readFileSync("./Nav-Bar/browser-app.js");

// here we used readFileSync ==> because we are not invoking every time the server is opened by someone

http
  .createServer((req, res) => {
    const url = req.url;

    // bellow instead of typing the html data we can pass in an html file --> look at the about page section
    // but before that we need to get the about.html in the file system using FS-Module
    // see on line 3-5
    if (url === "/") {
      // here we are setting up a info of metadata of our response
      res.writeHead(200, { "content-type": "text/html" });

      //notice while we are providing info of metadata, in the content-type: html matters
      //means the data we are hosting bellow is treated as html component
      //also any change results --> encoding change to text such as: download the text file
      //                                                           : to whole text format for: plain
      //                                                           : to html component of : html

      //200 --> indicates for the status code and there are other types of status code

      console.log(req.method);

      res.write(homePage);
      res.end();
      return;
    }

    // home style
    else if (url === "/style.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyle);
      res.end();
      return;
    }
    // logo svg
    else if (url === "/logo.svg") {
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(homeLogo);
      res.end();
      return;
    }

    // home logic
    else if (url === "/browser-app.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeLogic);
      res.end();
      return;
    }

    // about page
    else if (url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(aboutPage);
      res.end();
    }

    // 404
    else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>Page not found</h1>");
      res.end();
    }
  })
  .listen(5000);

/* Conclusions */
// Using node we can setup matters like this using FS-Modules.
// However, when it comes to a website with a ton of resources, it'll be difficult to use the above method -->
// Therefore, the solution would be using the power of ((EXPRESS.JS))
// let's see how
//
//
//
//
//
/* http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("<h1>Jeremiah and Ruth</h1>");
      res.end();
      return;
    }

    if (req.url === "/about") {
      res.write("<h1>This is our about page</h1>");
      res.end();
      return;
    }

    res.write("<h1>Error page</h1>");
    res.end();
  })
  .listen(5000);
 */
