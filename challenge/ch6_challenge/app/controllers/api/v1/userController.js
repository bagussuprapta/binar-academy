const bcrypt = require("bcryptjs");
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

module.exports = {
  async create(req, res) {
    req.body.password = await encryptPassword(req.body.password);
    const user = await Users.create(req.body);
    res.status(200).json({ user });
  },
};
