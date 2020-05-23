const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GiftOfferingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "Development",
  },
  category: {
    type: String,
    required: true,
    default: "Development"
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
//   endDate: {
//     type: Date,
//     required: true,
//   },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    default: "Development"
  },
  
});

const GiftOffering = mongoose.model("GiftOffering", GiftOfferingSchema);

module.exports = GiftOffering;
