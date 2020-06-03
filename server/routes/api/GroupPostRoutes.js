const router = require("express").Router();
const GroupPostController = require("../../controllers/GroupPostController");

// Matches "/api/helpRequests"
router.route("/")
  .get(GroupPostController.findAll)
  .post(GroupPostController.create);

// Matches "/api/helpRequests/:id"
router
  .route("/:id")
  .get(GroupPostController.findById)
  .put(GroupPostController.update)
  .delete(GroupPostController.remove);

module.exports = router;