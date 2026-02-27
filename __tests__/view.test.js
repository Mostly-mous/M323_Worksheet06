const view = require("../src/view");

describe("View.js", () => {
  const mockDispatch = jest.fn();

  test("renders counter value correctly", () => {
    const model = { counter: 10 };

    const vdom = view(mockDispatch, model);

    // erstes Child ist Counter-Anzeige
    const counterText = vdom.children[0].children[0];

    expect(counterText).toBe("Count: 10");
  });

  test("renders two buttons", () => {
    const model = { counter: 0 };

    const vdom = view(mockDispatch, model);

    const buttonContainer = vdom.children[1];

    expect(buttonContainer.children.length).toBe(2);
  });

  test("buttons contain correct text", () => {
    const model = { counter: 0 };

    const vdom = view(mockDispatch, model);

    const buttonContainer = vdom.children[1];
    const increaseBtn = buttonContainer.children[0];
    const decreaseBtn = buttonContainer.children[1];

    expect(increaseBtn.children[0]).toContain("Increase");
    expect(decreaseBtn.children[0]).toContain("Decrease");
  });

  test("buttons contain onclick handler", () => {
    const model = { counter: 0 };

    const vdom = view(mockDispatch, model);

    const buttonContainer = vdom.children[1];
    const increaseBtn = buttonContainer.children[0];

    expect(typeof increaseBtn.properties.onclick).toBe("function");
  });

  test("does not crash with negative counter", () => {
    const model = { counter: -5 };

    const vdom = view(mockDispatch, model);

    const counterText = vdom.children[0].children[0];

    expect(counterText).toBe("Count: -5");
  });
});