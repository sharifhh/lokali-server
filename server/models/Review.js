const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  valueHours: { type: Number, required: true, min: 1, max: 10 },
  trustworthiness: { type: Number, required: true, min: 1, max: 10 },
  mutualRespect: { type: Number, required: true, min: 1, max: 10 },
  quality: { type: Number, required: true, min: 1, max: 10 },
  competance: { type: Number, required: true, min: 1, max: 10 },
  communication: { type: Number, required: true, min: 1, max: 10 },
  experience: { type: Number, required: true, min: 1, max: 10 },
  overall: { type: Number, required: true, min: 1, max: 10 },
  giver: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
