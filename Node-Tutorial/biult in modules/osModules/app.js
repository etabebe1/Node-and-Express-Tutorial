const os = require("os");

// The current user of the operating system
const user = os.userInfo();
console.log(user);

// method that returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

// info of the current os
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOs);
