const { Admins } = require("../../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SALT = 10;

function encryptPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptedPassword) => {
      if (err) return reject(err);
      return resolve(encryptedPassword);
    });
  });
}

module.exports = {
  async create(req, res, err) {
    try {
      if (await Admins.findOne({ where: { username: req.body.username } }))
        throw err;
      req.body.password = await encryptPassword(req.body.password);
      const admin = await Admins.create(req.body);
      res.status(200).json({
        status: "Created",
        username: admin.username,
        type: admin.type,
      });
    } catch (err) {
      res.status(422).json({
        status: "Unprocessable Entity",
      });
    }
  },
};
