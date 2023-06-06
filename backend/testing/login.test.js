const request = require("supertest");
const app = require("../server");

describe("register", () => {
  it("should throw an error if username and password not same", async () => {
    // Arrange
    const response = await request(app).post("/auth/login").send({
      username: "john_doe",
      password: "345",
    });

    // Assert
    expect(response.text).toEqual("Username or Password is incorrect");
  });
});
