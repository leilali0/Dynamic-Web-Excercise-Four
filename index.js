const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyCoeu85mP-27B2TbpJf_3grqSbm9Ie5f_E",
  authDomain: "exercise-four-leila.firebaseapp.com",
  projectId: "exercise-four-leila",
  storageBucket: "exercise-four-leila.appspot.com",
  messagingSenderId: "525338998904",
  appId: "1:525338998904:web:233658b2a50ac80dbfd58d"
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
const articleRoute = require("./routes/article");
const createArticleRoute = require("./routes/createArticle");

app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/create", createArticleRoute);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
