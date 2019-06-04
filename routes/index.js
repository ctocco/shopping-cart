const express = require("express");
const apiRouter = express.Router({ strict: true });
const sendJsonResp = require("../helpers/sendJsonResponse");

const { getAllProducts } = require("../controllers/product");

const apiRoutes = {
  getAllProducts: "/products",
  getProductsById: "/products/:id"
};

apiRouter.get("/", (req, res) => {
  res.json({ availableRoutes: apiRoutes });
});
// apiRouter.use(sendJsonResp);
apiRouter.get(apiRoutes.getAllProducts, getAllProducts);

module.exports = apiRouter;
