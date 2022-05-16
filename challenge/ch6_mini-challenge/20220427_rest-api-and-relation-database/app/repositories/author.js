const {Author, Post} = require("../models");

module.exports = {
  create(createArgs){
    return Author.create(createArgs);
  },

  findOne(id){
    return Author.findOne({
      where: {
        id: id
      },
      include: {
        model: Post,
        attributes: ['title', 'body']
      }
    });
  }
}
