const router = require("express").Router();
const eventController = require("../../controllers/eventController");
const intitiativeController = require("../../controllers/initiativeController");
const helpRequestController = require("../../controllers/helpRequestController");
const giftOfferingController = require("../../controllers/giftOfferingController");

router
  .route("/")
  .get(intitiativeController.findAll)
  .get(eventController.findAll)
  .get(helpRequestController.findAll)
  .get(giftOfferingController.findAll);

module.exports = router;
