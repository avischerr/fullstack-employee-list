const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/example", (req, res) => {
  // your code here
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
