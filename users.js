//Each user should have a name.

class User {
  constructor(name) {
    this.name = name;
    this.electricScooter = [];
    this.manualScooter = [];
  }
}
class ElectricScooter extends Scooter {
  userScooter(scooter) {
    if (scooter instanceof ElectricScooter) {
      this.electricScooter.push(scooter);
      console.log("Here is your scooter");
    } else {
      console.log("Please wait for your scooter to charge");
      setTimeout(() => {
        alert(`Hi ${user}, Here is electric ${model}`);
      }, 2000);
    }
  }
}

class ManualScooter extends Scooter {
  callManual() {
    console.log(`Hi ${user},Here is your Manual ${model}`);
  }
}
module.exports = User;
