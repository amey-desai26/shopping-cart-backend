const cartData = [];

function getCart() {
  const totalPrice = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return {
    items: cartData,
    totalPrice,
  };
}

function addToCart(product) {
  const existingItem = cartData.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += product.quantity || 1;
  } else {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity || 1,
      imageUrl: product.imageUrl || "",
    };
    cartData.push(newProduct);
  }
  return getCart();
}

function updateQuantity(productId, quantity) {
  const item = cartData.find((item) => item.id === productId);
  if (item) {
    item.quantity = quantity;
  }
  return getCart();
}

function removeFromCart(productId) {
  const index = cartData.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cartData.splice(index, 1);
  }
  return getCart();
}

module.exports = {
  getCart,
  addToCart,
  updateQuantity,
  removeFromCart,
};
