const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config;
const { Users } = require("../../../models");
const SALT = 10;

function encryptPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptedPassword) => {
      if (err) return reject(err);
      return resolve(encryptedPassword);
    });
  });
}

function checkPassword(password, encryptedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, encryptedPassword) => {
      if (err) reject(err);
      resolve(encryptedPassword);
    });
  });
}

function createToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
}

module.exports = {
  async create(req, res) {
    req.body.password = await encryptPassword(req.body.password);
    const user = await Users.create(req.body);
    res.status(200).json({ user });
  },

  async login(req, res) {
    const user = await Users.findOne({
      where: { username: req.body.username },
    });
    if (!user) {
      res.status(404).json({ status: "Not Found" });
      return;
    }
    if (!(await checkPassword(req.body.password, user.password))) {
      res.status(403).json({ status: "Forbidden" });
      return;
    }
    token = createToken({
      id: user.id,
      username: user.username,
    });
    res.status(200).json({ status: "Login success", token });
  },
};
