const express = require("express");
const apiRouter = express.Router({ strict: true });
const sendJsonResp = require("../helpers/sendJsonResponse");

const { getAllProducts } = require("../controllers/product");
const { addProduct } = require("../controllers/cart");

const apiRoutes = {
  getAllProducts: "/products",
  getProductById: "/products/:id",
  addProduct: "/add/:id",
  removeProduct: "/remove/:id",
  removeAllProduct: "remove-all/:id"
};

apiRouter.get("/", (req, res) => {
  res.json({ availableRoutes: apiRoutes });
});
// apiRouter.use(sendJsonResp);
apiRouter.get(apiRoutes.getAllProducts, getAllProducts);
apiRouter.get(apiRoutes.getProductById, getAllProducts);

apiRouter.get("/cart/add/:id", addProduct);

module.exports = apiRouter;
