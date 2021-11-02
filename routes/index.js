const express = require("express");

const router = express.Router();

const firebase = require('firebase/firestore/lite');

const db = firebase.firestore();
const blogposts = db.collection('blogpost');

//Get all articles from firebase
router.get("/", (req, res) => {
	const blogpostsArry = [];
	res.send(blogpostsArry);
});

module.exports = router;
