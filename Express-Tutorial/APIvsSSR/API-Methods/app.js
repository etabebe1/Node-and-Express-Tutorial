const express = require("express");
const app = express();
const {products} = require('./data')
const {people} = require('./data')

app.get("/", (req, res) => {
//   res.json([{ name: "Jeremiah" }, { name: "Top G" }]);
  res.json(products);
  res.json(people)
});

app.listen(5000, () => {
  console.log("App listens at port: 5000...");
});
