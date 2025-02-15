const express = require("express");
const router = express.Router();

const products = [
  { id: 1, productName: "Bat", sportsCategory: "Cricket" },
  { id: 2, productName: "Racket", sportsCategory: "Tennis" },
  { id: 3, productName: "Basketball", sportsCategory: "Basketball" },
];

router.use((req, res, next) => {
  console.log("Product Route Accessed");
  next();
});

router
.route("/")
  .get((req, res, next) => {
    try {
      res.json(products);
    } catch (error) {
      next(error);
    }
  })
  .post((req, res, next) => {
    try {
      const { productName, sportsCategory } = req.body;
      if (!productName) {
        throw new Error("ProductName is Required");
      }
      const newProduct = {
        id: products.length + 1,
        productName,
        sportsCategory: sportsCategory || "General",
      };
      products.push(newProduct);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/:id")
  .get((req, res, next) => {
    try {
      const productId = parseInt(req.params.id, 10);
      const product = products.find((product) => product.id === productId);
      if (product) {
        res.json(product);
      } else {
        const error = new Error("Product not Found");
        error.status = 404;
        throw error;
      }
    } catch (error) {
      next(error);
    }
  })
  .put((req, res, next) => {
    try {
      const productId = parseInt(req.params.id, 10);
      const product = products.find((product) => product.id === productId);
      if (product) {
        product.productName = req.body.productName || product.productName;
        product.sportsCategory =
          req.body.sportsCategory || product.sportsCategory;
        res.json(product);
      } else {
        const error = new Error("Product not Found");
        error.status = 404;
        throw error;
      }
    } catch (error) {
      next(error);
    }
  })
  .delete((req, res, next) => {
    try {
      const productId = parseInt(req.params.id, 10);
      const index = products.findIndex((product) => product.id === productId);
      if (index == -1) {
        const error = new Error("Product not Found");
        error.status = 404;
        throw error;
      } else {
        const deletedProduct = products[index];
        products.splice(index, 1);
        res.json(deletedProduct);
      }
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
