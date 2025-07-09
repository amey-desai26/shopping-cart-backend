const cartModel = require("../models/cartModel");

function getCartItems(req, res, next) {
  try {
    const cart = cartModel.getCart();
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}

function deleteCartItem(req, res, next) {
  try {
    const itemId = parseInt(req.params.id, 10);
    const updatedCart = cartModel.removeFromCart(itemId);
    if (!updatedCart) {
      return res.status(404).json({ message: "Item not found in cart" });
    }
    res.status(200).json(updatedCart);
  } catch (error) {
    next(error);
  }
}

function updateCartItem(req, res, next) {
  try {
    const itemId = parseInt(req.params.id, 10);
    const { quantity } = req.body;
    const updatedCart = cartModel.updateQuantity(itemId, quantity);
    if (!updatedCart) {
      return res.status(404).json({ message: "Item not found in cart" });
    }
    res.status(200).json(updatedCart);
  } catch (error) {
    next(error);
  }
}

function addCartItem(req, res, next) {
  try {
    const { id, name, price, imageUrl } = req.body;
    if (
      typeof id !== "number" ||
      !name ||
      typeof price !== "number" ||
      typeof imageUrl !== "string"
    ) {
      return res.status(400).json({
        message:
          "Missing or invalid product parameters. Required: id (number), name (string), price (number), quantity (number)",
      });
    }
    const newItem = cartModel.addToCart({ id, name, price, imageUrl });
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCartItems,
  deleteCartItem,
  updateCartItem,
  addCartItem,
};
