const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.app.get("env"))
  next();
})

app.get("/", (req, res) => {
  res.json({
    title: "test-req-app-get"
  })
})

app.listen(3000, () => {
  console.log("Server running on 3000");
});