const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    const { query } = req.query;
    (query || query === ""
      ? db.Initiative.find({
          $or: [
            { heading: { $regex: query, $options: "i" } },
            { subheading: { $regex: query, $options: "i" } },
          ],
        })
      : db.Initiative.find(req.query)
    )
      .then((initiatives) => res.json(initiatives))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Initiative.findById(req.params.id)
      .then((initiative) => res.json(initiative))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Initiative.create(req.body)
      .then((initiative) => res.json(initiative))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Initiative.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((initiative) => res.json(initiative))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Initiative.findById(req.params.id)
      .then((initiative) => initiative.remove())
      .then((initiative) => res.json(initiative))
      .catch((err) => res.status(422).json(err));
  },
};
