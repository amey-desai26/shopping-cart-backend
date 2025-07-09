const products = [
  {
    id: 1,
    name: "Apple iPhone 13",
    price: 799.99,
    imageUrl:
      "https://www.imagineonline.store/cdn/shop/files/iPhone_13_Green_PDP_Image_Position-1A__GBEN.jpg?v=1692413640",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 699.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQHorWJZ_yOX3jZ59qfAfnUZ7VUJNWcAwWg&s",
  },
  {
    id: 3,
    name: "Google Pixel 6",
    price: 599.99,
    imageUrl: "https://m.media-amazon.com/images/I/61ruKkvVIxL.jpg",
  },
  {
    id: 4,
    name: "Apple iPhone 15",
    price: 729.99,
    imageUrl: "https://m.media-amazon.com/images/I/71d7rfSl0wL.jpg",
  },
  {
    id: 5,
    name: "Sony Xperia 5 II",
    price: 949.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UZ4e2oHb5h32jtGcuWf-ESuTIQg167jNCA&s",
  },
  {
    id: 6,
    name: "OnePlus 9 Pro",
    price: 969.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSofJ0o6La31AaOfMRLfyg5jXrp_hZgyKcMg&s",
  },
  {
    id: 7,
    name: "Xiaomi Mi 11",
    price: 749.99,
    imageUrl:
      "https://averagedadofficial.com/cdn/shop/files/Screenshot2024-11-02at08.31.05.png?v=1730536618&width=1946",
  },
  {
    id: 8,
    name: "Oppo Find X3 Pro",
    price: 1149.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Tybz2ykiNDhbTPgdEY4s7bZrxLZXsprIKA&s",
  },
  {
    id: 9,
    name: "Motorola Edge 20 Pro",
    price: 899.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClyWW_oujqdyNmZHFAVr4nXFoVpLjnByTxQ&s",
  },
  {
    id: 10,
    name: "Nokia XR20",
    price: 499.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOriE7hoFJcgcSoSRUE8DbHsIzT4xLifFUQw&s",
  },
  {
    id: 11,
    name: "Samsung Galaxy S24",
    price: 899.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tm3KCw6JHQ7RgFdnvfc21VGb91VfhNvJGA&s",
  },
  {
    id: 12,
    name: "Samsung Galaxy A55",
    price: 599.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJpS_UFZvXwKr5yL3e-TvBNBDAoJUszHfGQ&s",
  },
];

function getAllProducts(sortBy, sortOrder) {
  let sortedProducts = [...products];
  if (sortBy === "name") {
    sortedProducts.sort((a, b) =>
      sortOrder === "desc"
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name)
    );
  } else if (sortBy === "price") {
    sortedProducts.sort((a, b) =>
      sortOrder === "desc" ? b.price - a.price : a.price - b.price
    );
  }
  return sortedProducts;
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function searchProductsByName(query, sortBy, sortOrder) {
  let filtered = products;
  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerQuery)
    );
  }
  if (sortBy === "name") {
    filtered.sort((a, b) =>
      sortOrder === "desc"
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name)
    );
  } else if (sortBy === "price") {
    filtered.sort((a, b) =>
      sortOrder === "desc" ? b.price - a.price : a.price - b.price
    );
  }
  return filtered;
}

module.exports = {
  getAllProducts,
  getProductById,
  searchProductsByName,
};
