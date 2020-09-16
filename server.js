const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");
const mysql = require("mysql");

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/api/employees", (req, res) => {
  queries.retrieveAllEmployees((err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/employees/:id", (req, res) => {
  console.log("in the endpoint");
  console.log(req.params.id);
  var requestedId = req.params.id;
  queries.retrieveSingleEmployee((err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.send(result);
    }
  }, requestedId);
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
