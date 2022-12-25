const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  req.end("hekka");
});

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
