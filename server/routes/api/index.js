const mongoose = require("mongoose");

const db = require('../../models');

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/local-lokali";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});

console.log('api file')
module.exports = (app) => {
    
  app.get("/api/posts/offers", (req, res) => {
    console.log("get /api/posts/offers")
    db.Offer.find({}, (err, data) => {
      if (err) res.error(err);
      else res.json(data);
    });
  });

  app.post("/api/posts/offers", (req, res) => {
    console.log("post /api/posts/offers")
    const { offer } = req.body;
    db.Offer.create(offer).then((err) => {
      if (err) res.error(err);
      res.json({ message: "success" });
    });
  });
};
