const adminService = require("../../../services");

module.exports = {
  async postRegisterSuperAdmin(req, res) {
    try {
      const admin = await adminService.api.v1.adminService.registerSuperAdmin(
        req.body
      );
      res.status(202).json({
        username: admin.username,
        role: admin.role,
      });
    } catch (err) {
      res.status(err.status || 400).json({
        message: err.message,
        statusTest: res.headers,
      });
    }
  },

  async postRegisterAdmin(req, res) {
    try {
      const admin = await adminService.api.v1.adminService.registerAdmin(
        req.admin,
        req.body
      );
      res.status(200).json({
        username: admin.username,
        role: admin.role,
      });
    } catch (err) {
      res.status(err.status || 400).json({
        message: err.message,
      });
    }
  },

  async postLogin(req, res) {
    try {
      const token = await adminService.api.v1.adminService.login(req.body);
      res.status(200).json({ token });
    } catch (err) {
      res.status(err.status || 400).json({ message: err.message });
    }
  },

  async currentAdmin(req, res) {
    res.status(200).json({
      username: req.admin.username,
      role: req.admin.role,
    });
  },

  async postUpdate(req, res) {
    try {
      const admin = adminService.api.v1.adminService.update(
        req.params.username,
        req.body
      );
      res.status(200).json({ message: "success update" });
    } catch (err) {}
  },
};
