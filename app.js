const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send("Hello Ankush")
})

mongoose.connect("mongodb://localhost:27017/wikiDB")

const articleSchema = {
  title: String,
  content: String
}

const Article = mongoose.model("Article", articleSchema)

app.listen(3000, function() {
  console.log("Server started on port 3000");
});