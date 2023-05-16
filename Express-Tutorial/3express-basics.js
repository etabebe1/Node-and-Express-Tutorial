const express = require("express");
const app = express();

// using the app.get() --> method,

app.get("/", (req, res) => {
  console.log("User hit the request...");
  res.status(200).send("<h1>Hello We are using express here</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

// 404 ---> in express is a default response. however, we can setup our own 404 page
// we can do that using the app.all() --> method
// here is how

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource is not found</h1>");
});

app.listen(5000, () => {
  console.log("the port listens at port: 5000...");
});

// Notice while using express, we use different methods
// such as:...app.get
//............app.post
//............app.put
//............app.delete
//............app.all
//............app.use
//............app.listen
