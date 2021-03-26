//Each user should have a name.

class User {
  constructor(name) {
    this.name = name;
  }
}
class ElectricScooter extends Scooter {
  // this should hav settime function - takes 2s
  //   setTimeout(() => {
  //     alert(`Hi ${user}, Here is electric ${model}`);
  // }, 2000)
}
class ManualScooter extends Scooter {
  callManual() {
    console.log(`Hi ${user},Here is your Manual ${model}`);
  }
}
module.exports = User;
