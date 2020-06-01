const mongoose = require("mongoose");
const { Schema } = mongoose;
const PostSchema = new Schema({
  type: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        ["events", "giftoffering", "initiative", "helprequest"].includes(
          value.toLowerCase()
        );
      },
      message: "{VALUE} is not a valid type.",
    },
  },
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
//   description: {
//     type: String,
//     required: true,
//   },
//   author: {},
  location: {
    type: String,
  },
//   createdAt: {},
//   dateOf: {},
//   timeOf: {},
//   interestedUsers: [{}],
//   frequency: {
//     unit: {},
//     number: {},
//   },
});
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;