// server.js

const express = require("express");

const app = express();

app.use(express.json());


// Sample Product Data
let products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000
  }
];


// GET All Products
app.get("/products", (req, res) => {
  res.json(products);
});


// GET Single Product
app.get("/products/:id", (req, res) => {
  const product = products.find(
    (p) => p.id == req.params.id
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
});


// ADD Product
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    product: newProduct
  });
});


// UPDATE Product
app.put("/products/:id", (req, res) => {
  const product = products.find(
    (p) => p.id == req.params.id
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;

  res.json({
    message: "Product updated successfully",
    product
  });
});


// DELETE Product
app.delete("/products/:id", (req, res) => {
  products = products.filter(
    (p) => p.id != req.params.id
  );

  res.json({
    message: "Product deleted successfully"
  });
});


// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});