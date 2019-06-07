const Product = require("../models/product");
const mongoose = require("mongoose");
const express = require("express");
const shoppingCart = require("../models/cart");
var app = express();

module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      const productList = await Product.find();
      res.json(productList);
    } catch (error) {
      error.message = noProducts;
      next(error);
    }
  },
  getProductById: async (req, res, next) => {
    try {
      const product = await Product.find(_id);
      res.json(product);
    } catch (error) {
      error.message = noProducts;
    }
  }
};
