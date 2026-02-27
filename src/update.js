const { MSGS } = require("./model");

function update(msg, model) {
  switch (msg) {
    case MSGS.ADD:
      return { ...model, counter: model.counter + 1 };
    case MSGS.SUBTRACT:
      return { ...model, counter: model.counter - 1 };
    default:
      return {...model};
  }
}

module.exports = update;