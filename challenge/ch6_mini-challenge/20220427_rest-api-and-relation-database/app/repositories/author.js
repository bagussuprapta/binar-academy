const {Author} = require("../models");

module.exports = {
  create(createArgs){
    return Author.create(createArgs);
  }
}
