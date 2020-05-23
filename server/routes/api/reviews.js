const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

// Matches "/api/reviews"
router.route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);

// Matches "/api/reviews/:id"
router
  .route("/:id")
  .get(reviewController.findById)
  .put(reviewController.update)
  .delete(reviewController.remove);

module.exports = router;
