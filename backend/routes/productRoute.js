const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/authentication");

const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/products/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
  .get(getProductDetails);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
