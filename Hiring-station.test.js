const HiringStation = require("./Hiring-station");
const Scooter = require("./scooters");

// Users can hire scooters from a hiring station and return them later.
//  Users can only hire electric scooters if they are charged.
//  When a user returns an electric scooter, its charge is always used up.
//  Charging takes 2 seconds so you’ll need to use the setTimeout function.

describe("Hiring Station test", () => {
  test("checking the location", () => {
    //Assign
    let Dagenham = new HiringStation("Dagenham");
    //Assert
    expect(Dagenham.location).toEqual("Dagenham");
  });
  test("checking allScooter", () => {
    //Act
    // console.log(HiringStation.allScooter);
    let blueVision = new Scooter("Blue Vision");
    console.log(HiringStation.userHiring);
  });
});
