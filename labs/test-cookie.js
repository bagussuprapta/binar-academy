const express = require("express");
const app = express();
const debug = require("debug")("myapp");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.listen(8080, function(){
  debug("localhost:8080");
})