const update = require("../src/update");
const { MSGS } = require("../src/model");

describe("Update.js", () => {
  const baseModel = { counter: 5 };

  test("ADD increases counter by 1", () => {
    const result = update(MSGS.ADD, baseModel);

    expect(result.counter).toBe(6);
  });

  test("SUBTRACT decreases counter by 1", () => {
    const result = update(MSGS.SUBTRACT, baseModel);

    expect(result.counter).toBe(4);
  });

  test("unknown message returns unchanged model", () => {
    const result = update("UNKNOWN", baseModel);

    expect(result).toEqual(baseModel);
  });

  test("does not mutate original model", () => {
    const copy = { counter: 5 };

    const result = update(MSGS.ADD, copy);

    expect(copy.counter).toBe(5);
    expect(result).not.toBe(copy);
  });

  test("counter can go negative", () => {
    const model = { counter: 0 };

    const result = update(MSGS.SUBTRACT, model);

    expect(result.counter).toBe(-1);
  });
});