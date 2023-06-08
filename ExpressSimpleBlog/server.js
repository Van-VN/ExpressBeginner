const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 8000;

const articleList = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.render("cms");
});

app.post("/view", (req, res) => {
  if (req.body.title && req.body.sapo && req.body.content) {
    let article = req.body;
    articleList.push(article);
    res.render("view", { articleList });
  } else {
    res.end(`Error`);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
