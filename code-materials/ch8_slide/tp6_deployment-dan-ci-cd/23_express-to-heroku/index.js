const express = require("express");
const { PORT = 8080 } = process.env;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello there, comrade general!");
});

app.listen(PORT);
