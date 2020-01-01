const mogoose = require("mongoose");

let schema = new mogoose.Schema({
  name: {
    type: String
  }
});

module.exports = mogoose.model("category", schema);
