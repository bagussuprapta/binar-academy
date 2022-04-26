const {Post} = require("../models");

module.exports = {
  findAll(){
    return Post.findAll();
  },
  create(createArgs){
    return Post.create(createArgs);
  }
}