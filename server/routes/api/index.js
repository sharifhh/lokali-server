const router = require("express").Router();

const eventsRoutes = require("./events");
const giftOfferingsRoutes = require("./giftOfferings");
const helpRequestsRoutes = require("./helpRequests");
const initiativesRoutes = require("./initiatives");
const reviewsRoutes = require("./reviews");
<<<<<<< HEAD
const postRoutes = require("./posts");
=======
const searchRoutes = require("./search");
const usersRoutes = require("./users");
>>>>>>> 2c382968700e4832e697918ec8b14e4913c84821

router.use("/api/posts/", searchRoutes);
router.use("/api/posts/events", eventsRoutes);
router.use("/api/posts/giftofferings", giftOfferingsRoutes);
router.use("/api/posts/helprequests", helpRequestsRoutes);
router.use("/api/posts/initiatives", initiativesRoutes);
router.use("/api/reviews", reviewsRoutes);
<<<<<<< HEAD
router.use("/api/posts/items", postRoutes);
=======
router.use("/api/opendata/users", usersRoutes); 

// calling it this so that we dont use the same naming as /api/users :)
// this data should be open anyways. 
// all the information about the passwords and emails will be hidden of course. 
>>>>>>> 2c382968700e4832e697918ec8b14e4913c84821

module.exports = router;
