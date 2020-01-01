module.exports = app => {
  const mogoose = require("mongoose");

  mogoose.connect("mongodb://127.0.0.1:27017/vue-node-moba", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


};
