const path = require("path");
const separator = path.sep;
console.log(separator);

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
