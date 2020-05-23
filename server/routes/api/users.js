const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
