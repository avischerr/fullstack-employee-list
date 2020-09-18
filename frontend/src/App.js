import React, { Component } from "react";
// import exampleEmployees from "./exampleEmployees";
import EmployeeList from "./components/EmployeeList";
import Employee from "./components/Employee";
import Axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      employee: {},
      inputID: ''
    };
    this.getAllEmployees = this.getAllEmployees.bind(this);
    this.getAllEmployees = this.getOneEmployee.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.fetchEmployees = this.fetchEmployees.bind(this);
  }

  componentDidMount() {
    this.getAllEmployees();
  };

  getAllEmployees () {
    Axios.get("http://localhost:3000/api/employees")
      .then(res => {
        this.setState({employees: res.data}, () => {
          console.log("in getallemployees: ", this.state.employees);
        });
      })
      .catch(err => {
        console.error(err);
      })
  }

  getOneEmployee () {
    let id = this.state.inputID;
    console.log("id in getOneEmployee: ", id);
    Axios.get(`http://localhost:3000/api/employees/${id}`)
      .then(res => {
        this.setState({employee: res.data[id - 1]}, () => {
          console.log("this.state.employee: ", this.state.employee);
          console.log("res.data in getoneemployee: ", res.data)
        });
      })
      .catch(err => {
        console.error(err);
      })
  }

  // fetchEmployees () {
  //   fetch('/api/employees')
  //     .then(data => {
  //       console.log("here's our data: ", data)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }

  handleChange (event) {
    event.preventDefault();
    var id = event.target.value;
    this.setState({inputID: id});
    console.log("id:", id);
    console.log("inputID:", this.state.inputID);
  }

  handleClick (click) {
    click.preventDefault();
    this.getOneEmployee();
  }

  render() {
    return (
      <div>
        <h1>Full Stack Reps!</h1>

        <EmployeeList employees={this.state.employees}/>
        {this.state.employees.map((person) => (
          <div>
            <h3>{person.first_name}</h3>
            <p>{person.city}</p>
          </div>
        ))}

        {/* form to choose single employee */}
        <form>
          <input placeholder="Enter employee id" onChange={this.handleChange} value={this.state.inputID}></input>
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </form>


        {/* if an employee is selected, show that employee here */}
        <Employee employee={this.state.employee}/>
      </div>
    );
  }
}

export default App;
