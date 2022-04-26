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
  }
}