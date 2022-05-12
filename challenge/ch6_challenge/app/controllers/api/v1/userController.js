const userService = require("../../../services");

module.exports = {
  async postRegister(req, res) {
    try {
      const user = await userService.api.v1.userService.register(req.body);
      res.status(200).json({
        user: user.username,
        fullname: user.fullname,
      });
    } catch (err) {
      res.status(err.status || 400).json({
        message: err.message,
      });
    }
  },

  async postLogin(req, res) {
    try {
      const token = await userService.api.v1.userService.login(req.body);
      res.status(200).json({ token });
    } catch (err) {
      res.status(err.status || 400).json({ message: err.message });
    }
  },
};
