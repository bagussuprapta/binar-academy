const author = require("../repositories/author");

module.exports = {
  create(reqBody){
    return author.create(reqBody);
  }
}