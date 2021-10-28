const express = require("express");

const router = express.Router();

//Get single article based on ID from firebase
router.get("/", (req, res) => {
	res.send(`
	<h1>Individual Post</h1>
	`);
});

module.exports = router;
