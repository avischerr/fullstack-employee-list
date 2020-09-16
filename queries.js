const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fullstackreps",
});

connection.connect();

const retrieveAllEmployees = (cb) => {
  connection.query("SELECT * FROM employees", function (
    error,
    results,
    fields
  ) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};


const retrieveSingleEmployee = (cb, req, id) => {
  var requestedId = req.params.id;
  connection.query(`SELECT * from employees where employees.id = ${requestedId}`, function (
    error,
    results,
    fields
    ) {
      if (error) {
        cb(error, null);
      } else {
        cb(null, results);
      }
  });
};

module.exports = {
  retrieveAllEmployees,
  retrieveSingleEmployee
};