const adminRepository = require("../../../repositories");

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  async authorizeAdmin(reqToken) {
    try {
      if (reqToken == null) throw { status: 401, message: "token needed" };
      const token = reqToken.split("Bearer ")[1];
      const tokenPayload = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_ADMIN_SECRET
      );
      return await adminRepository.api.v1.adminRepository.findByUsername(
        tokenPayload.username
      );
    } catch (err) {
      throw err;
    }
  },
};
