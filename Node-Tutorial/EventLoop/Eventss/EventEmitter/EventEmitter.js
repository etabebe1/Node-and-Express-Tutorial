/* Bellow is the basic setup */
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("Data received");
});

// point #1
customEmitter.on("response", (name, id) => {
  console.log(
    "Listening same event however, the functionality in the callback function is different..."
  );

  console.log(`Data received as name : ${name} with id : ${id}`);
});

// point #2 --> is the above order matters ((( on()--> subscription method )))
// point #3 --> we can pass an argument to the callback when we are emitting the event --- as on example the 2nd listening function
//          --> that doesn't mean every thing will be broken as on first function()

customEmitter.emit("response", "Jeremiah", 22);
