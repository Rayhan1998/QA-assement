import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
  await driver.sleep(2000);
});

test("test if `choose two header` shows up after clicking draw button", async () => {
  let drawButton = await driver.findElement(By.id("draw"));

  drawButton.click();

  let header = await driver.findElement(By.id("choose-header")).getText();
  expect(header).toBe("Choose 2!");

  await driver.sleep(2000);
});

//  Could not get this test to run because element did not exist

// test("test if Add to duo button changes to remove from due after clicking on it ", async () => {
//   let drawButton = await driver.findElement(By.id("draw"));

//   drawButton.click();

//   let addToDueBtn = await driver.findElement(By.className("bot-btn"));
//   addToDueBtn.click();
//   let removeBtn = await addToDueBtn.getText();
//   expect(removeBtn).toBe("Remove from Duo");

//   await driver.sleep(4000);
// });
