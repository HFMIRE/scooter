const { Scooter, EScooter } = require("../scooters");

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
    let captain = new Scooter("Captain", "mScooter");
    // console.log(captain);
    //Act
    //Assert
    expect(captain.model).toBeTruthy();
  });
  test("returning of the scooter", () => {});
});
//charging refer to the settimeout function

// - not separated into src/tests
// - scooter class is confused (code not really re-used)
// - Scooter's userScooter doesn't work
// - scooters imported to hiring station and User but not used
// - inconsistent file naming
// - be nice if User had a scooter property
// - better test coverage would be nice
// - should test whether userHiring actually pushes scooter
