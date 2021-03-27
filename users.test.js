const { User } = require("./users");
const { Scooter, MScooter, EScooter } = require("./scooters");

describe("user testing", () => {
  test("checking if electric scooter recognised", () => {
    //Arrange
    let wanda = new EScooter("Red Wanda", "eScooter");
    // Act
    console.log(wanda.userScooter(wanda));
    console.log(Scooter.electricScooter);
    console.log(wanda);

    // console.log(wanda);
    // Assert
    expect(wanda instanceof EScooter).toBeTruthy();
  });
  test("checking manual scooter is working", () => {
    // Arrange
    let captain = new MScooter("Captain", "mScooter");
    // console.log(captain);
    //Act
    //Assert
    expect(captain instanceof MScooter).toBeTruthy();
  });
  test("returning of the scooter", () => {});
});
//charging refer to the settimeout function
