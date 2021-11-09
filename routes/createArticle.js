const express = require( "express" );

const router = express.Router();

const form = `
	<h1>Creat Post</h1>	

	<form action='/create/submit'>
	<div style ="
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
		max-width:325px; 
	">
	<label for="articleTitle">
			 Article Title
		</label>
		<input 
			type="text" 
			name="articleTitle"
			placeholder="type article title..."
	/>
	<label for="articleText">
		Article Text
	</label>
	<input 
		type="text" 
		name="articleText"
	  placeholder="type article text..."
	/>
	<label for="author">
		Author
	</label>
	<input 
		type="text" 
		name="author"
		placeholder="type article author..."
	/>

	</div>
	<button type="submit">Submit Article</button>
</form>
`;

const firestore = require( "firebase/firestore" );
const db = firestore.getFirestore();

router.get("/", (req, res) => res.send(form));

//Allow post to request to creta a signle article from firebase
router.get("/submit", (req, res) => {
	const queryParams = req.query;
	const title = queryParams.articleTitle;
	const text = queryParams.articleText;
	const author = queryParams.author;

	const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();

	const setBlogPost = firestore.setDoc(
		firestore.doc(db, "blogpost", idFromTitle), 
		{
			title,
			text,
			author,
		}
	);

	setBlogPost
	.then((response) => {
		console.log("Success");
		res.send(`
			<h1>Submission Sucessful!</h1>
			<p><a href="/creat">Add Another Post</a></p>
		`);
	})
	.catch((error) => {
		res.send(error)
		res.send(`Error Submitting: ${error.toString()}`);
	});
})

module.exports = router;
