const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      const { query } = req.query;
    db.GiftOffering.find({
      $or: [
        { heading: { $regex: query, $options: "i" } },
        { subheading: { $regex: query, $options: "i" } },
      ],
    })
        .then(giftOfferings => res.json(giftOfferings))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.GiftOffering.findById(req.params.id)
        .then(giftOffering => res.json(giftOffering))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.GiftOffering.create(req.body)
        .then(giftOffering => res.json(giftOffering))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.GiftOffering.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(giftOffering => res.json(giftOffering))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.GiftOffering.findById(req.params.id)
        .then(giftOffering => giftOffering.remove())
        .then(giftOffering => res.json(giftOffering))
        .catch(err => res.status(422).json(err));
    }
  };