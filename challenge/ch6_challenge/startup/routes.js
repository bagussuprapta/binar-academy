const mainRouter = require("../routes/mainRouter");
const userRouter = require("../routes/userRouter");

module.exports = function (app) {
  app.use("/", mainRouter);
  app.use("/users", userRouter);
};
