const db = require("../models");
const connect = require("../dbConnection");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .then((users) => {
        console.log(users);
        res.json(
          users.map((user) => {
            const { name, surname, _id } = user;
            console.log(user);

            return { name, surname, _id };
          })
        );
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then(User => res.json(User))
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((user) => {
        const { name, surname, _id } = user;
        user = { name, surname, _id };
        res.json(user);
      })
      .catch((err) => res.status(422).json(err));
  },
  /* 
  use cases for an update:
  REMOVE THIS METHOD IF THIS LIST DOESNT HAVE ANY ITEMS
  */
  update: function (req, res) {
    db.User.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  /* 
  SAME WITH ABOVE
  */
  remove: function (req, res) {
    db.User.findById(req.params.id)
      .then((user) => user.remove())
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
};
