const router = require("express").Router();
const OneonOnePostConroller = require("../../controllers/OneonOnePostConroller");

// Matches "/api/helpRequests"
router.route("/")
  .get(OneonOnePostConroller.findAll)
  .post(OneonOnePostConroller.create);

// Matches "/api/helpRequests/:id"
router
  .route("/:id")
  .get(OneonOnePostConroller.findById)
  .put(OneonOnePostConroller.update)
  .delete(OneonOnePostConroller.remove);

module.exports = router;