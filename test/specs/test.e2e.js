const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("App Android", () => {
  it("deve abrir o app no celular", async () => {
    await driver.pause(5000);
  });
});
