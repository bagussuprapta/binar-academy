const fs = require("fs");

fs.readFile("read-this-file.txt", "utf-8", (err, content) => {
  if(err) throw err;
  console.log(content);
});