const express = require("express");
const app = express();
const path = require("path");
const PORT = 1128;
const queries = require("./queries");
const mysql = require("mysql");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "./frontend/build")));

// use cors as middleware
app.use(cors());

app.get("/api/employees", (req, res) => {
  console.log("inside get request");
  queries.retrieveAllEmployees((err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res);
      res.send(result);
    }
  });
});

app.get(`/api/employees/:id`, (req, res) => {
  console.log("in the endpoint");
  console.log(req.body);
  console.log(req.params.id);
  var requestedId = req.params.id;
  queries.retrieveSingleEmployee(requestedId, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
