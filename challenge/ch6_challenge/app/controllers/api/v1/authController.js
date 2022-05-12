const authService = require("../../../services");

module.exports = {
  async authorizeAdmin(req, res, next) {
    try {
      req.admin = await authService.api.v1.authService.authorizeAdmin(
        req.headers.authorization
      );
      next();
    } catch (err) {
      res.status(err.status || 400).json({
        message: err.message,
      });
    }
  },
};
