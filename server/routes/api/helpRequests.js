const router = require("express").Router();
const helpRequestController = require("../../controllers/helpRequestController");

// Matches "/api/helpRequests"
router.route("/")
  .get(helpRequestController.findAll)
  .post(helpRequestController.create);

// Matches "/api/helpRequests/:id"
router
  .route("/:id")
  .get(helpRequestController.findById)
  .put(helpRequestController.update)
  .delete(helpRequestController.remove);

module.exports = router;