const author = require("../../../services/author");

module.exports = {
  create(req, res) {
    author.create({
      postId: req.body.postId,
      name: req.body.name,
      email: req.body.email,
    })
      .then((author) => {
        res.status(201).json({
          status: "OK",
          data: author,
        });
      })
      .catch((err) => {
        res.status(201).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
  show(req, res) {
    const author = req.author;

    res.status(200).json({
      status: "OK",
      data: author,
    });
  },
}