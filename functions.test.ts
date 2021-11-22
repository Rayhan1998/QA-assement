const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("expect the returned array to be the length of the array that was passed", () => {
    expect(shuffleArray([1, 3, 4])).toHaveLength(3);
  });

  test("expect the returned array items to include the same array items that was passed in as arguments ", () => {
    expect([4, 2, 1]).toEqual(expect.arrayContaining(shuffleArray([4, 2, 1])));
  });
});
