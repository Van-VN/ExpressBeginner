const express = require("express");
const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(`Hello World!`);
});
