import React, { Component } from "react";
import exampleEmployees from "./exampleEmployees";
import EmployeeList from "./components/EmployeeList";
import Employee from "./components/Employee";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Full Stack Reps!</h1>

        <EmployeeList />

        {/* form to choose single employee */}
        <form>
          <input placeholder="Enter employee id"></input>
          <button type="submit">Submit</button>
        </form>

        {/* if an employee is selected, show that employee here */}
        <Employee />
      </div>
    );
  }
}

export default App;
