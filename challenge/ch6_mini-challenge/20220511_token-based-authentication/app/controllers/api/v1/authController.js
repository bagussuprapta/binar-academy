/**
 * @file contains authentication request handler and its business logic
 * @author Fikri Rahmat Nurhidayat
 */

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../../models");
const SALT = 10;

function encryptPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptedPassword) => {
      if (!!err) {
        reject(err);
        return;
      }

      resolve(encryptedPassword);
    });
  });
}

function checkPassword(encryptedPassword, password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
      if (!!err) {
        reject(err);
        return;
      }

      resolve(isPasswordCorrect);
    });
  });
}

function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SIGNATURE_KEY || "Rahasia");
}

module.exports = {
  async register(req, res) {
    const email = req.body.email;
    const encryptedPassword = await encryptPassword(req.body.password);
    const user = await User.create({ email, encryptedPassword });
    res.status(201).json({
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  },

  async login(req, res) {
    const email = req.body.email.toLowerCase(); // Biar case insensitive
    const password = req.body.password;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ message: "Email tidak ditemukan" });
      return;
    }

    const isPasswordCorrect = await checkPassword(
      user.encryptedPassword,
      password
    );

    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Password salah!" });
      return;
    }

    const token = createToken({
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });

    res.status(201).json({
      id: user.id,
      email: user.email,
      token,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  },

  async whoAmI(req, res) {
    res.status(200).json(req.user);
  },

  async authorize(req, res, next) {
    try {
      const bearerToken = req.headers.authorization;
      const token = bearerToken.split("Bearer ");
      console.log(bearerToken);
      console.log(token);
      const tokenPayload = jwt.verify(
        token[1],
        process.env.JWT_SIGNATURE_KEY || "Rahasia"
      );

      req.user = await User.findByPk(tokenPayload.id);
      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  },
};
