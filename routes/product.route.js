const express = require("express")
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller.js");

router.get("/", getProducts);//READ API ALL PRODUCTS
router.get("/:id", getProduct);//READ PRODUCT ID
router.post("/", createProduct);//CREATE API & PRODUCTS
router.put("/:id", updateProduct);//UPDATE A PRODUCT
router.delete("/:id", deleteProduct)//DELETE A PRODUCT

module.exports = router;