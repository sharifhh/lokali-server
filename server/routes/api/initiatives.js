const router = require("express").Router();
const initiativeController = require("../../controllers/initiativeController");

// Matches "/api/initiatives"
router.route("/")
  .get(initiativeController.findAll)
  .post(initiativeController.create);

// Matches "/api/initiatives/:id"
router
  .route("/:id")
  .get(initiativeController.findById)
  .put(initiativeController.update)
  .delete(initiativeController.remove);

module.exports = router;
