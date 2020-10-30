import React, { Component } from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FormLabel from "./components/FormLabel";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees: employees,
    search: "",
    sortOrder: "ASC",
    orderedEmployees: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // Filter the employee list by the search term.
    var filteredEmployees = this.state.employees.filter(person => person.name.includes(this.state.search));

    var orderedEmployees = [];

    // Sort employees alphabetically by Ascending order
    if (this.state.sortOrder === "ASC") {
      orderedEmployees = filteredEmployees.sort();
      console.log("filteredEmployeesASC");
      console.log(orderedEmployees);
    }
    // Sort employees alphabetically by Descending order
    else if (this.state.sortOrder === "DES") {
      orderedEmployees = filteredEmployees.sort().reverse();
      console.log("filteredEmployeesDES");
      console.log(orderedEmployees);
    }

    // Reset the search after the user has pressed the search button.
    this.setState({
      search: "",
      orderedEmployees: orderedEmployees
    });
  }

  render() {
    return (
      <>
        <h1>Hi!</h1>
        <Header />
        <SearchBar
          search={this.state.search}
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <FormLabel />
        {this.state.orderedEmployees.map(person =>
          <EmployeeCard
            key={person.id}
            id={person.id}
            name={person.name}
            phone={person.phone}
            email={person.email}
            dateOfBirth={person.dateOfBirth}
          />
        )}
      </>
    );
  }
}

export default App;
