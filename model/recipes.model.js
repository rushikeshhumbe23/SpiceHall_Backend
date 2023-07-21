const mongoose = require("mongoose");

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };

const recipeSchema = new mongoose.Schema(
  {
    images: reqArray,
    video: String,
    name: reqString,
    category: reqString,
    ingredients: reqString,
    directions: reqString,
    course: reqString,
    review: Number,
    rating: reqNumber,
    timeRequired: String,
    nutrients: { type: Object, required: true },
    like: reqArray,
    comment: reqArray,
    createdAt: String,
    username: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
  }
);

const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = RecipeModel;
