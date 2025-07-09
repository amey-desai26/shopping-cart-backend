const productModel = require("..//models/productModel");

function getProducts(req, res, next) {
  try {
    const search = req.query.search;
    const sortBy = req.query.sortBy;
    const sortOrder = req.query.sortOrder || "asc";
    let products;
    if (search) {
      products = productModel.searchProductsByName(search, sortBy, sortOrder);
    } else {
      products = productModel.getAllProducts(sortBy, sortOrder);
    }
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

function getProductById(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const product = productModel.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProducts,
  getProductById,
};
