const request = require("supertest");
const app = require("../server");

describe("register", () => {
  it("should register a user successfully", async () => {
    // Arrange
    const response = await request(app).post("/auth/register").send({
      username: "john_doe",
      password: "123456",
    });

    // Assert
    expect(response.text).toEqual("Account created successfully");
  });

  it("should throw an error if username is already taken", async () => {
    // Arrange
    const response = await request(app).post("/auth/register").send({
      username: "john_doe",
      password: "123456",
    });

    // Assert
    expect(response.text).toEqual("The username is already in use");
  });
});
