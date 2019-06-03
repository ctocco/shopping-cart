var faker = require("faker");

let productArray = [];

for (let i = 0; i < 20; i++) {
  let products = {
    product: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.abstract()
  };
  productArray.push(products);
}

console.log(productArray);
