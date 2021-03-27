const { User } = require("./users");
//Each scooter should have a model name.
// electric and manual
class Scooter {
  constructor(model, type) {
    this.model = model;
    this.type = type;
    this.isAvaliable = true;
    this.electricScooter = [];
    this.manualScooter = [];
  }
}
class EScooter extends Scooter {
  userScooter(scooter) {
    if (scooter instanceof EScooter) {
      this.electricScooter.push(scooter);
      console.log("Here is your scooter");
    } else {
      // this is to do with the retun - charging state
      console.log("Please wait for your scooter to charge");
      this.isAvaliable = this.isAvaliable === true ? false : true;
      setTimeout(() => {
        alert(`Hi ${user}, Here is your electric ${model}`);
      }, 2000);
    }
  }
}
// Mscooter = Manual Scooters
class MScooter extends Scooter {
  userScooter(scooter) {
    if (scooter instanceof MScooter) {
      this.manualScooter.push(scooter);
      console.log(`Hi ${user}, Here is your ${model}`);
    } else {
      throw new Error("Manual scooter is not working");
    }
  }
}

module.exports = { Scooter, MScooter, EScooter };
