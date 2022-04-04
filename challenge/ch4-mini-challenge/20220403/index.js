console.log("Hello World");

const os = require("os");
const areaOfTriangle = require("./segitiga");
const fs = require("fs");

console.log("Free memory: ", os.freemem());
console.log("Luas segitiga: ", areaOfTriangle(2, 4));

const value = fs.readFileSync("./note.txt", "utf-8");
console.log(value);

fs.writeFileSync("./write.txt", "Hello World");