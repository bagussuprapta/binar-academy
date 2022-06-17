const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const axios = require("axios").default;
const app = express();
const port = 5000;
const { changeDateCars, filterCars } = require("./helper");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    message: "Berhasil",
  });
});

app.post("/api/cars", async (req, res) => {
  const cars = (await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")).data;
  const newCars = await changeDateCars(cars);
  const filteredCars = await filterCars(newCars, req.body);
  res.send(filteredCars);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
