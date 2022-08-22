const express = require("express");
const createError = require("http-errors");
const app = express();

app.use((req, res, next) => {
  console.log("middleware ran");
  next();
});

app.use((req, res, next) => {
  console.log("middleware ran 2");
  res.send({tet: "test"});
});

app.use((req, res, next) => {
  console.log("middleware ran 3");
  next();
});

app.get("/", (req, res) => {
  console.log("Home route");
  res.send({some: "json"});
});

console.log(createError(404));

app.listen(2020, () => {
  console.log("localhost:2020");
})