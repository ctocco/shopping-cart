const Product = require("../models/product");
const Cart = require("../models/cart");

module.exports = {
  addProduct: async (req, res) => {
    const { id } = req.params;
    const { cart } = req.session;

    const product = await Product.findById(id);
    console.log("Session: ", res.req.session);
    cart.add(product);

    res.json({ cart });
  }
};
