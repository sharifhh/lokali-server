const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches "/api/events"
router.route("/")
  .get(eventController.findAll)
  .post(eventController.create);

// Matches "/api/events/:id"
router
  .route("/:id")
  .get(eventController.findById)
  .put(eventController.update)
  .delete(eventController.remove);

module.exports = router;
