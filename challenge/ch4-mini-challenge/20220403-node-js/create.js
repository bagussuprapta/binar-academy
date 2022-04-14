const fs = require("fs");

const createPerson = person => {
  fs.writeFileSync("./person.json", JSON.stringify([person]));
  return person;
}

module.exports = createPerson;