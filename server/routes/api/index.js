const mongoose = require("mongoose");

const db = require("../../models");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/local-lokali";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});

console.log("api file");
module.exports = (app) => {
  app.get("/api/posts/offers", async (req, res) => {
    try {
      console.log("get /api/posts/offers");
      await db.Offer.find({}, (err, data) => {
        res.json(data);
      });
    } catch (error) {
      console.error(error);
    }
  });

  app.post("/api/posts/offers", async (req, res) => {
    try {
      console.log("post /api/posts/offers");
      console.log(req.body);
      // const { offer } = req.body;
      // await db.Offer.create(req.body);
      res.json({ message: "success" });
    } catch (error) {
      console.log(error);
    }
  });
};
