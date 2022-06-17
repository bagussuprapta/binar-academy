// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "de86zxnrj", // TODO: Ganti dengan cloudname-mu
  api_key: "465967182284966", // TODO: Ganti dengan API Key-mu
  api_secret: "F7fOQXY4S0fHG1m2-PkHbsyqDcQ", // TODO: Ganti dengan API Secret-mu
  secure: true,
});

module.exports = cloudinary;
