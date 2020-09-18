import React from "react";
import Employee from "./Employee";

const EmployeeList = (props) => {
  return (
    <div>
      <Employee employee={props.employee} />
      <Employee employee={props.employee} />
      <Employee employee={props.employee} />
    </div>
  );
};

export default EmployeeList;
