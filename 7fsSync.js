const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./content/writtenFileViaSyncMethod.txt",
  "| i was appended using the third argument",
  { flag: "a" } // this third argument will make the method append to the existing content of the file if exisiting, instead of overriding it
);
