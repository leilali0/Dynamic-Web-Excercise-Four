const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const indexRoute = require("./routes/index");
const articleRoute = require("./routes/article");
const createArticleRoute = require("./routes/createarticle");

app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/createArticle", createArticleRoute);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
