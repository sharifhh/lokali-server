const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GiftOfferingSchema = new Schema({
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
    default: "Gift Offering",
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

const GiftOffering = mongoose.model("GiftOffering", GiftOfferingSchema);

module.exports = GiftOffering;
