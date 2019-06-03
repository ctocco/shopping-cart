const faker = require("faker");
const Product = require("../models/product");
const mongoose = require("mongoose");

let productArray = [];

for (let i = 0; i < 20; i++) {
  let products = {
    name: faker.commerce.product(),
    description: faker.lorem.sentence(),
    imageurl: faker.image.abstract(),
    price: faker.commerce.price()
  };
  productArray.push(products);
}

mongoose.connect("mongodb://localhost:27017/productshop", {
  useNewUrlParser: true
});

Product.insertMany(productArray)
  .then(data => {
    if (data) {
      mongoose.connection.close();
    }
  })
  .catch(err => console.log(err));
