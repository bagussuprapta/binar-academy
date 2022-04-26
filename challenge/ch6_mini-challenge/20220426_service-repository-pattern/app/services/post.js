const { create } = require("../controllers/api/v1/post");
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
  }
}