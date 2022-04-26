const {Post} = require("../models");

module.exports = {
  findAll(){
    return Post.findAll();
  },

  create(createArgs){
    return Post.create(createArgs);
  },

  update(id, updateArgs){
    return Post.update(updateArgs, {
      where: {
        id,
      },
    })
  },

  findByPk(id){
    return Post.findByPk(id);
  }
}