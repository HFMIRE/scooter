//Each scooter should have a model name.
// electric and manual
class Scooter {
  constructor(model) {
    this.model = model;
  }
}
class EScooter extends scooter {
  constructor(model) {
    super(model);
    this.isCharged = false;
  }
}
module.exports = { Scooter, EScooter };
