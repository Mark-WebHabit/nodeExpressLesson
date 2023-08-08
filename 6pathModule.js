const path = require("path");

// console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath); // returns the combined path sepcified in the argument

const base = path.basename(filePath);
console.log(base); // returns the filename

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // returns the absolute path
