const express = require("express");

const router = express.Router();

//Get all articles from firebase
router.get("/", (req, res) => {
	res.send(`
	<h1>All Articles</h1>
	`);
});

module.exports = router;
