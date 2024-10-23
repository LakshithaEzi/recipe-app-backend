const mongoose = require("mongoose");

const FavouriteSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    recipeId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Favourite = mongoose.model("Favourite", FavouriteSchema);

module.exports = Favourite;
