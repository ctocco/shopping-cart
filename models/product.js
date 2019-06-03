const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    maxlength: 40
  },
  description: {
    type: String,
    maxLength: 500
  },
  imageurl: {
    type: String,
    maxlength: 40
  },
  price: {
    type: Number,
    maxlength: 40
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
