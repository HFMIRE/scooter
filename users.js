//Each user should have a name.
const Scooter = require("./scooters");

class User {
  constructor(name) {
    this.name = name;
  }
}

module.exports = { User };
