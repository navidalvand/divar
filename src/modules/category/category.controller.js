const autoBind = require("auto-bind");

class CategoryController {
  constructor() {
    autoBind(this);
  }

  add() {
    
  }

  getAll() {
    
  }
}

module.exports = {
  CategoryController: new CategoryController(),
};
