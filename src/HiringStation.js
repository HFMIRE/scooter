//Each hiring station should have a location.
// Hiring stations have an inventory of scooters.

class HiringStation {
  constructor(location) {
    this.location = location;
    this.scooters = [];
  }
  returnScooter(scooter) {
    this.scooters.push(scooter);
  }
}
module.exports = HiringStation;
