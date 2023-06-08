const express = require("express");
const app = express();
const port = 8000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static("public"));

const products = [
  {
    title: "iphone 14",
    src: "images/iphone.jpg",
  },
  {
    title: "oppo",
    src: "images/oppo.jpg",
  },
  {
    title: "samsung",
    src: "images/samsung.jpg",
  },
  {
    title: "xiaomi",
    src: "images/xiaomi.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("home", { products });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
