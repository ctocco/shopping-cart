const mongoose = require("mongoose");
const Schema = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    maxlength: 40
  },
  description: {
    type: String,
    maxLength: 200
  },
  imageurl: {
    type: String,
    maxlength: 40
  },
  price: {
    type: number,
    maxlength: 40
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
