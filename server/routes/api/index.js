const router = require("express").Router();
const eventsRoutes = require("./events");
const giftOfferingsRoutes = require("./giftOfferings");
const helpRequestsRoutes = require("./helpRequests");
const initiativesRoutes = require("./initiatives");
const reviewsRoutes = require("./reviews");
const postRoutes = require("./posts");

router.use("/api/posts/events", eventsRoutes);
router.use("/api/posts/giftofferings", giftOfferingsRoutes);
router.use("/api/posts/helprequests", helpRequestsRoutes);
router.use("/api/posts/initiatives", initiativesRoutes);
router.use("/api/reviews", reviewsRoutes);
router.use("/api/posts/items", postRoutes);

module.exports = router;
