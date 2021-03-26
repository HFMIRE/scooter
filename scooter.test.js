const Scooter = require("./scooters");

describe("checking scooter", () => {
  test("checking if model is works", () => {
    //asign
    let blueVision = new Scooter("Blue Vision");
    //Assert
    expect(blueVision.model).toEqual("Blue Vision");
  });
});
