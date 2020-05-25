const router = require("express").Router();
const searchController = require("../../controllers/searchController");
// const eventController = require("../../controllers/eventController");
// const intitiativeController = require("../../controllers/initiativeController");
// const helpRequestController = require("../../controllers/helpRequestController");
// const giftOfferingController = require("../../controllers/giftOfferingController");

router.route("/").get(searchController.findAll);
// .get(eventController.findAll)
// .get(intitiativeController.findAll)
// .get(helpRequestController.findAll)
// .get(giftOfferingController.findAll);

module.exports = router;
