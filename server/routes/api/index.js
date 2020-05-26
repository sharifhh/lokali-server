const router = require("express").Router();

const eventsRoutes = require("./events");
const giftOfferingsRoutes = require("./giftOfferings");
const helpRequestsRoutes = require("./helpRequests");
const initiativesRoutes = require("./initiatives");
const reviewsRoutes = require("./reviews");
const searchRoutes = require("./search");
const postRoutes = require("./posts");
const usersRoutes = require("./users");

router.use("/api/posts/", searchRoutes); // This should be changed. Posts is the global name for all the post items
router.use("/api/posts/events", eventsRoutes);
router.use("/api/posts/giftofferings", giftOfferingsRoutes);
router.use("/api/posts/helprequests", helpRequestsRoutes);
router.use("/api/posts/initiatives", initiativesRoutes);
router.use("/api/reviews", reviewsRoutes);
router.use("/api/opendata/users", usersRoutes); 
router.use('/api/posts/items/', postRoutes)

// calling it this so that we dont use the same naming as /api/users :)
// this data should be open anyways. 
// all the information about the passwords and emails will be hidden of course. 

module.exports = router;
