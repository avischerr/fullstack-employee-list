import React, { Component } from "react";
import exampleEmployees from "./exampleEmployees";
import EmployeeList from "./components/EmployeeList";
import Employee from "./components/Employee";
import Axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: {}
    };
  }

  componentDidMount() {
    this.getOneEmployee();
  };

  getOneEmployee () {
    Axios.get("/api/employees")
      .then(res => {
        this.setState({employees: res.data}, () => {
          console.log(this.state.employees);
        });
      })
      .catch(err => {
        console.error(err);
      })
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
        <Employee employees={this.state.employees}/>
      </div>
    );
  }
}

export default App;
