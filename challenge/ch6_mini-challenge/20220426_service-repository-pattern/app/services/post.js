const post = require("../repositories/post");

module.exports = {
  async list(){
    try{
      const posts = await post.findAll();
      return {
        posts
      };
    } catch(err){
      throw err;
    }
  },

  create(reqBody){
    return post.create(reqBody);
  },

  update(id, requestBody){
    return post.update(id, requestBody);
  },

  findByPk(id){
    return post.findByPk(id);
  }
}