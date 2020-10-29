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
    sortOrder: "ASC"
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    // Sort Order (sets state of "sort order")
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    var filteredEmployees = this.state.employees.filter(person => person.firstName.includes(this.state.search));

    console.log("filteredEmployees");
    console.log(filteredEmployees);

    // Reset the search after the user has pressed the search button
    this.setState({
      search: ""
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
        <EmployeeCard />
      </>
    );
  }
}

export default App;
