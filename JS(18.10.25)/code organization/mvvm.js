// Model - handles business logic and data
const ProductModel = {
  products: [],
  addProduct(product) {
    this.products.push(product);
  }
};

// ViewModel - manages data and UI state between view and model
class ProductViewModel {
  constructor(model) {
    this.model = model;
  }
  get products() {
    return this.model.products;
  }
  addProduct(product) {
    this.model.addProduct(product);
  }
}

// View (UI) - handles UI
const viewModel = new ProductViewModel(ProductModel);
viewModel.addProduct("Rose");
console.log(viewModel.products); // ["Rose"]
