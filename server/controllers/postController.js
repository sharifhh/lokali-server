const db = require("../models");
// const connect = require("../dbConnection");

module.exports = {
  findAll: function (req, res) {
    const { query } = req.query;
    console.log(req);
    (query || query === ""
      ? db.Post.find({
          $or: [
            { heading: { $regex: query, $options: "i" } },
            { subheading: { $regex: query, $options: "i" } },
          ],
        })
      : db.Post.find(req.query)
    )
      .then((posts) => res.json(posts))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Post.findById(req.params.id)
      .then((post) => res.json(post))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Post.create(req.body)
      .then((post) => res.json(post))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Post.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((post) => res.json(post))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Post.findById(req.params.id)
      .then((post) => post.remove())
      .then((post) => res.json(post))
      .catch((err) => res.status(422).json(err));
  },
};
