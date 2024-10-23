const Favourite = require("../models/Favourite");
const jwt = require("jsonwebtoken");

const getUserIdFromToken = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new Error("No token provided");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.user.userId;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

const getFavourites = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    const favorites = await Favourite.find({ userId });

    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorites", error });
  }
};

const addFavourite = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    console.log(userId);
    const { recipeId } = req.body;

    const newFavourite = new Favourite({ userId, recipeId });
    await newFavourite.save();

    res
      .status(201)
      .json({ message: "Favorite added successfully", newFavourite });
  } catch (error) {
    res.status(500).json({ message: "Error adding favorite", error });
  }
};

const deleteFavourite = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    const { recipeId } = req.params;

    await Favourite.findOneAndDelete({ userId, recipeId });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting favorite", error });
  }
};

module.exports = {
  getFavourites,
  addFavourite,
  deleteFavourite,
};
