const cart = {
  "5cf502eddbe9a6104529cc88": {
    productDetails: {
      _id: "5cf502eddbe9a6104529cc88",
      name: "Chips",
      description: "Commodi ipsa officia qui numquam quibusdam excepturi.",
      imageurl: "http://lorempixel.com/640/480/abstract",
      price: 909
    }
  },
  "5cf502eddbsdfasdf29cc88": {
    productDetails: {
      _id: "5cf502eddbsdfasdf29cc88",
      name: "Chips",
      description: "Commodi ipsa officia qui numquam quibusdam excepturi.",
      imageurl: "http://lorempixel.com/640/480/abstract",
      price: 909
    }
  }
};

class Cart {
  constructor() {
    this.items = {};
  }

  add(product) {
    if (this.items.hasOwnProperty(product._id)) {
      const item = this.items[product._id];
      item.qty++;
      item.price = item.qty * product.price;
    } else {
      this.items[product._id] = {
        productDetails: product,
        qty: 1,
        price: product.price
      };
    }
  }

  remove(product) {
    const item = this.items[product._id];
    if (item.qty > 1) {
      item.qty--;
      item.price = item.qty * product.price;
    }
  }

  removeAll() {
    this.items = {};
  }
}

let updateCart = new Cart();
updateCart.add(cart["5cf502eddbe9a6104529cc88"]