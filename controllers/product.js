const Product = require("../models/product");
const mongoose = require("mongoose");
const express = require("express");
var app = express();

module.exports = {
  getAllProducts: async (req, res, next) => {
    console.log(req.session);
    try {
      const productList = await Product.find();
      res.json(productList);
    } catch (error) {
      error.message = noProducts;
      next(error);
    }
  }
};


