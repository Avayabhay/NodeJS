const path = require("path");

const express = require("express");
const ProductController = require("./../controllers/products");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", ProductController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", ProductController.getPostProduct);

module.exports = router;
