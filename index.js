require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: ["https://el-shopping.netlify.app"], // Add Netlify domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// route configuration
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
