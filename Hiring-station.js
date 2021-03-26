const Scooter = require("./scooters");

//Each hiring station should have a location.
// Hiring stations have an inventory of scooters.

class HiringStation {
  static allScooter = [];
  constructor(location) {
    this.location = location;
    this.scooters = [];
    this.constructor.allScooter.push();
  }
  userHiring(scooter) {
    this.scooters.push(scooter);
  }
}

module.exports = HiringStation;
