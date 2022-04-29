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

  setAuthor(req, res, next) {
    author.findOne(req.params.id)
      .then((author) => {
        if (!author) {
          res.status(404).json({
            status: "FAIL",
            message: "Author not found!",
          });
          return;
        }

        req.author = author;
        next()
      })
      .catch((err) => {
        res.status(404).json({
          status: "FAIL",
          message: "Author not found!",
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