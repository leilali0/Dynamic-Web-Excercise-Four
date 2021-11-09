const express = require("express");

const router = express.Router();

const firestore = require('firebase/firestore');

const db = firestore.getFirestore();

//Get single article based on ID from firebase
router.get("/:id", (req, res) => {
	const postId = req.params.id;
	const post = firestore.getDoc(
		firestore.doc(db, "blogpost", postId
	));

	post 
		.then((response) => {
			const postData = response.data();
			if (postData) return res.send(postData);
			return res.send(`no doc...... sorry`);
		})
		.catch((error) => {
			res.send(`no doc... sorry`);
		});
});

router.get("/", (req, res) => {
	res.send('Please include an ID');
});

module.exports = router;
