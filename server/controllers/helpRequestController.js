const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    const { query } = req.query;
    db.HelpRequest.find({
      $or: [
        { heading: { $regex: query, $options: "i" } },
        { subheading: { $regex: query, $options: "i" } },
      ],
    })
      .then((helpRequests) => res.json(helpRequests))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.HelpRequest.findById(req.params.id)
      .then((helpRequest) => res.json(helpRequest))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.HelpRequest.create(req.body)
      .then((helpRequest) => res.json(helpRequest))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.HelpRequest.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((helpRequest) => res.json(helpRequest))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.HelpRequest.findById(req.params.id)
      .then((helpRequest) => helpRequest.remove())
      .then((helpRequest) => res.json(helpRequest))
      .catch((err) => res.status(422).json(err));
  },
};
