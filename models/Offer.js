const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OfferSchema = new Schema({
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
  createAt: {
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

const Offer = mongoose.model("Offer", OfferSchema);

module.exports = Offer;
