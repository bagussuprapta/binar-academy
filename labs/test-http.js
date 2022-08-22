const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
// console.log(server);
// console.log(http.createServer());
server.listen(3000);
server.on("error", test);

function test() {}
