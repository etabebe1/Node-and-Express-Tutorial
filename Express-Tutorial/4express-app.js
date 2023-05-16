const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
//here static means a file that a server doesn't change
app.use(express.static("./public"));

// app.get("/", (req, res) => {
// As we see bellow we are sending the html file directly without making it dynamic like other files
// These include files that are in public folder
//
/* res.sendFile(path.resolve(__dirname, "./Nav-Bar/index.html")); */
//
// However, we can make it dynamic, here is how, using two methods.
// First method is adding html file into static assets ==> means to public folder
//                                                     ==> here we don't even setup  the app.get() --> method
//                                                     ==> means server will serve index.html file by default || html file as a rule
//However, the above method works for (((Simple Websites)))
//

// Second method is using SERVER SIDE RENDERING (SSR)
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource is not found");
});

app.listen(5000, () => {
  console.log("Server listens at port: 5000...");
});
