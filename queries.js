const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
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


// const retrieveSingleEmployee = (cb, req, id) => {
//   console.log(req.params.id);
//   var requestedId = req.params.id;
//   connection.query(`SELECT * from employees where id = ${requestedId}`, function (error, results) {
//       if (error) {
//         cb(error, null);
//       } else {
//         cb(null, results);
//       }
//   });
// };

const retrieveSingleEmployee = (requestedId, cb) => {
  connection.query(`SELECT * from employees where id = ${requestedId}`, function (error, results) {
      if (error) {
        cb(error, null);
      } else {
        cb(null, results);
      }
  });
};

module.exports = {
  retrieveAllEmployees,
  retrieveSingleEmployee,
};