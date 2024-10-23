const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");

router.get("/", favoriteController.getFavourites);
router.post("/", favoriteController.addFavourite);
router.delete("/:recipeId", favoriteController.deleteFavourite);

module.exports = router;
