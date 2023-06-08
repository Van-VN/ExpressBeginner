const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const port = 9999;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const employeeList = [];

app.get("/", (req, res) => {
  res.render("create");
});

app.get("/view", (req, res) => {
  res.render("view", { employeeList });
});

app.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  employeeList.forEach((item) => {
    if (id === item.employeeID) {
      employeeList.splice(employeeList.indexOf(item), 1);
    }
  });
  res.redirect("/view");
});

app.post("/view", (req, res) => {
  if (
    req.body.employeeID &&
    req.body.employeeName &&
    req.body.employeeDepartment
  ) {
    employeeList.push(req.body);
    res.redirect("/view");
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
