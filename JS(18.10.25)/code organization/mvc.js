// Model - handles data and business logic
class ProductModel {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
}

// View - handles UI representation
class ProductView {
  show(products) {
    console.log("Product List:", products);
  }
}

// Controller - act as bridge between model and view
class ProductController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  addProduct(product) {
    this.model.addProduct(product);
    this.view.show(this.model.products);
  }
}

// Usage
const model = new ProductModel();
const view = new ProductView();
const controller = new ProductController(model, view);

controller.addProduct("Bouquet");
