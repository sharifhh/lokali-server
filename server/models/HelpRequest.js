const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HelpRequestSchema = new Schema({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "Development",
  },
  location: {
    type: String,
    required: true,
    default: "Development",
  },
  category: {
    type: String,
    required: true,
    default: "Development",
  },
  type: {
    type: String,
    required: true,
    default: "Help Request",
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  interestedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const HelpRequest = mongoose.model("HelpRequest", HelpRequestSchema);

module.exports = HelpRequest;
