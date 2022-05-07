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

function checkPassword(password, encryptedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
      if (err) reject(err);
      return resolve(isPasswordCorrect);
    });
  });
}

function createToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_ADMIN_SECRET);
}

module.exports = {
  async create(req, res, err) {
    try {
      if (req.user.type !== "Super Admin"){
        res.status(403).json({ message: "Only Super Admin can create Admin" });
        throw err;
      }
      if (await Admins.findOne({ where: { username: req.body.username } }))
        throw err;
      req.body.password = await encryptPassword(req.body.password);
      const admin = await Admins.create(req.body);
      res.status(200).json({
        status: "Created",
        username: admin.username,
        type: admin.type,
      });
    } catch (err) {}
  },

  async login(req, res) {
    try {
      const admin = await Admins.findOne({
        where: { username: req.body.username },
      });
      if (!admin) res.status(404).json({ status: "Not Found" });
      if (!(await checkPassword(req.body.password, admin.password)))
        res.status(401).json("Unauthorized");

      const token = createToken({
        id: admin.id,
        username: admin.username,
        type: admin.type,
      });
      res.status(202).json({ status: "Accepted", token });
    } catch (err) {
      res.status(400).json({ err });
    }
  },

  async authorize(req, res, next) {
    try {
      const token = req.headers.authorization.split("Bearer ")[1];
      const tokenPayload = jwt.verify(token, process.env.ACCESS_TOKEN_ADMIN_SECRET);
      req.user = await Admins.findByPk(tokenPayload.id);
      next();
    } catch (err) {
      res.status(400).json({ err });
    }
  },
};
