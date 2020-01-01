module.exports = app => {
  let express = require("express");
  let router = express.Router();
  const category = require("../../models/category");
  router.post("/categories", async (req, res) => {
    let model = await category.create(req.body);

    res.send(model);
  });

  router.get("/categories/list", async (req, res) => {
    let items = await category.find();

    res.send(items);
  });
  app.use("/admin/api", router);
};
