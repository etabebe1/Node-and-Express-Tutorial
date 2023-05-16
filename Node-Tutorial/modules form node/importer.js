// The ES6 module type----> not understood
// import { name1, name2, name3 } from "./exportedVariables";
// import greetingFunc from "./exportedFunction";

const name = require("./exportedVariables");
const greetingFunc = require("./exportedFunction");

require('./mindGrenade')

setInterval(() => {
  greetingFunc(name.name1);
  greetingFunc(name.name2);
  greetingFunc(name.name3);
}, 1000);


