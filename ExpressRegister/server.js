const express = require("express");
const path = require("path");
const port = 8080;
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("register");
});

const userArray = [];

app.post("/user/register", (req, res) => {
  if (req.body.username && req.body.password) {
    let user = req.body;
    userArray.push(user);
    console.log(userArray);
    res.render("success", { user });
  } else {
    res.end(`Error!`);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
