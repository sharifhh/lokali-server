const router = require("express").Router();
const giftOfferingController = require("../../controllers/giftOfferingController");

// Matches "/api/giftOfferings"
router.route("/")
  .get(giftOfferingController.findAll)
  .post(giftOfferingController.create);

// Matches "/api/giftOfferings/:id"
router
  .route("/:id")
  .get(giftOfferingController.findById)
  .put(giftOfferingController.update)
  .delete(giftOfferingController.remove);

module.exports = router;