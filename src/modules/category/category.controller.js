const autoBind = require("auto-bind");
const { CategoryService } = require("./category.service");

class CategoryController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = CategoryService;
  }

  add(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }

  getAll(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  CategoryController: new CategoryController(),
};
