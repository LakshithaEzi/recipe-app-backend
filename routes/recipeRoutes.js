const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/categories", recipeController.getCategories);

module.exports = router;
