const adminRepository = require("../../../repositories");

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
  async registerSuperAdmin(reqBody) {
    try {
      if (!reqBody.username)
        throw { status: 422, message: "username field cannot empty" };
      if (!reqBody.fullname)
        throw { status: 422, message: "fullname field cannot empty" };
      if (!reqBody.password)
        throw { status: 422, message: "password field cannot empty" };
      if (!reqBody.role)
        throw { status: 422, message: "role field cannot empty" };
      if (
        await adminRepository.api.v1.adminRepository.findByUsername(
          reqBody.username
        )
      )
        throw { status: 409, message: "choose another username" };
      if (reqBody.role !== "superadmin")
        throw { status: 422, message: "set role to superadmin" };
      reqBody.password = await encryptPassword(reqBody.password);
      return adminRepository.api.v1.adminRepository.save(reqBody);
    } catch (err) {
      throw err;
    }
  },

  async registerAdmin(admin, reqBody) {
    try {
      if (admin.role !== "superadmin")
        throw { status: 401, message: "please login as superadmin" };
      if (!reqBody.username)
        throw { status: 422, message: "username field cannot empty" };
      if (!reqBody.fullname)
        throw { status: 422, message: "fullname field cannot empty" };
      if (!reqBody.password)
        throw { status: 422, message: "password field cannot empty" };
      if (!reqBody.role)
        throw { status: 422, message: "role field cannot empty" };
      if (reqBody.role !== "admin")
        throw { status: 422, message: "set role to admin" };
      if (
        await adminRepository.api.v1.adminRepository.findByUsername(
          reqBody.username
        )
      )
        throw { status: 409, message: "choose another username" };
      reqBody.password = await encryptPassword(reqBody.password);
      return adminRepository.api.v1.adminRepository.register(reqBody);
    } catch (err) {
      throw err;
    }
  },

  async login(reqBody) {
    try {
      if (!reqBody.username)
        throw { status: 422, message: "username field cannot empty" };
      if (!reqBody.password)
        throw { status: 422, message: "password field cannot empty" };
      const admin = await adminRepository.api.v1.adminRepository.findByUsername(
        reqBody.username
      );
      if (!admin)
        throw { status: 401, message: "username or password wrong" };
      if (!checkPassword(reqBody.password, admin.password))
        throw { status: 401, message: "password or password wrong" };
      return createToken({
        username: admin.username,
        role: admin.role,
      });
    } catch (err) {
      throw err;
    }
  },

  async update(username, reqBody) {
    const admin = await this.findByUsername(username);
    return adminRepository.api.v1.adminRepository.update(
      reqBody,
      admin.username
    );
  },
};
