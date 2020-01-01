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

  router.get("/categories/byId", async (req, res) => {
    console.log(req);

    res.send("get11");
  });
  app.use("/admin/api", router);
};
