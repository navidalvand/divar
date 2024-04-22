const { CategoryController } = require("./category.controller");

const router = require("express").Router();

router.post("/", CategoryController.add);
router.get("/", CategoryController.getAll);

module.exports = {
  categoryRouter: router,
};
