const HiringStation = require("./Hiring-station");
const { Scooter, MScooter, EScooter } = require("./scooters");

// Users can hire scooters from a hiring station and return them later.
//  Users can only hire electric scooters if they are charged.
//  When a user returns an electric scooter, its charge is always used up.
//  Charging takes 2 seconds so you’ll need to use the setTimeout function.

describe("Hiring Station test", () => {
  test("checking the location", () => {
    //Arrange
    let Dagenham = new HiringStation("Dagenham");
    //Assert
    expect(Dagenham.location).toEqual("Dagenham");
  });
  test("checking allScooter", () => {
    // Arrange
    // 1. first create the HiringStation and Scooter
    let dagenham = new HiringStation("Dagenham");
    let vision = new Scooter("Violet Vision");
    //Act
    // connect vision to hiring station Dagenham
    dagenham.userHiring(vision);
    // console.log(vision);
    // console.log(dagenham);
    // Assert
    expect(dagenham.location).toEqual("Dagenham");
    expect(vision.model).toBe("Violet Vision");
  });
});
