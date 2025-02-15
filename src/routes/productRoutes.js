const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.use((req, res, next) => {
  console.log("Product Route Accessed");
  next();
});

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find();
    //retrieves all documents from MongoDB
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { productName, sportsCategory } = req.body;
    if (!productName) {
      throw new Error("Product Name is Required!");
    }

    const newProduct = new Product({ productName, sportsCategory });
    const savedProduct = await newProduct.save(); //saving to Database
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      throw new Error("Product Not Found");
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!updateProduct) {
      throw new Error("Product Not Found");
    }
    res.json(updateProduct);
  } catch (error) {
    next(error);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      throw new Error("Product Not Found");
    }
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;