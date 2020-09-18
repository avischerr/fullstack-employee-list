import React from "react";
// import data from "../exampleEmployees";
// import App from "../App";

const Employee = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.employee.first_name}</h3>
      <p>{props.employee.city}</p>
    </div>
  );
};

export default Employee;
