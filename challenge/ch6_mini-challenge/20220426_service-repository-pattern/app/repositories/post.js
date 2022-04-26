const {Post} = require("../models");

module.exports = {
  findAll(){
    return Post.findAll();
  }
}