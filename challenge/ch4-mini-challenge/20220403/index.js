console.log("Hello World");

const os = require("os");
const areaOfTriangle = require("./segitiga");

console.log("Free memory: ", os.freemem());
console.log("Luas segitiga: ", areaOfTriangle(2, 4));