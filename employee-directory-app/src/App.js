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
    sortOrderASC: true,
    orderedEmployees: [],
    sortName: true,
    sortPhone: false,
    sortEmail: false,
    sortDOB: false,
    placeholder: "Search Employees by Name"
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    var filteredEmployees = [];

    if (this.state.sortName){
      filteredEmployees = this.state.employees.filter(person => person.name.includes(this.state.search));
    }
    else if (this.state.sortPhone){
      filteredEmployees = this.state.employees.filter(person => person.phone.includes(this.state.search));
    }
    else if (this.state.sortEmail){
      filteredEmployees = this.state.employees.filter(person => person.email.includes(this.state.search));
    }
    else if (this.state.sortDOB){
      filteredEmployees = this.state.employees.filter(person => person.dateOfBirth.includes(this.state.search));
    }

    var orderedEmployees = [];

    // Sort employees alphabetically by Ascending order
    if (this.state.sortOrderASC === true) {
      orderedEmployees = filteredEmployees.sort();
      console.log("filteredEmployeesASC");
      console.log(orderedEmployees);
    }
    // Sort employees alphabetically by Descending order
    else if (this.state.sortOrderASC === false) {
      orderedEmployees = filteredEmployees.sort().reverse();
      console.log("filteredEmployeesDES");
      console.log(orderedEmployees);
    }

    console.log(this.state.sortName);
    console.log(this.state.sortPhone);
    console.log(this.state.sortEmail);
    console.log(this.state.sortDOB);

    // Reset the search after the user has pressed the search button.
    this.setState({
      search: "",
      orderedEmployees: orderedEmployees
    });
  }

  // Click to select search category. Also clicking again will toggle order.
  handleFormSubmitName = event => {
    event.preventDefault();

    var newOrderedEmployees = [];

    newOrderedEmployees = this.state.orderedEmployees.sort().reverse();

    var placeholderText = "Search Employees by Name";

    this.setState({
      orderedEmployees: newOrderedEmployees,
      sortName: true,
      sortPhone: false,
      sortEmail: false,
      sortDOB: false,
      placeholder: placeholderText
    });
  }
  handleFormSubmitPhone = event => {
    event.preventDefault();

    var newOrderedEmployees = [];

    newOrderedEmployees = this.state.orderedEmployees.sort().reverse();

    var placeholderText = "Search Employees by Phone Number";

    this.setState({
      orderedEmployees: newOrderedEmployees,
      sortName: false,
      sortPhone: true,
      sortEmail: false,
      sortDOB: false,
      placeholder: placeholderText
    });
  }
  handleFormSubmitEmail = event => {
    event.preventDefault();

    var newOrderedEmployees = [];

    newOrderedEmployees = this.state.orderedEmployees.sort().reverse();

    var placeholderText = "Search Employees by Email";
    
    this.setState({
      orderedEmployees: newOrderedEmployees,
      sortName: false,
      sortPhone: false,
      sortEmail: true,
      sortDOB: false,
      placeholder: placeholderText
    });
  }
  handleFormSubmitDOB = event => {
    event.preventDefault();

    var newOrderedEmployees = [];

    newOrderedEmployees = this.state.orderedEmployees.sort().reverse();

    var placeholderText = "Search Employees by Date of Birth";

    this.setState({
      orderedEmployees: newOrderedEmployees,
      sortName: false,
      sortPhone: false,
      sortEmail: false,
      sortDOB: true,
      placeholder: placeholderText
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
          placeholder={this.state.placeholder}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <FormLabel
          handleFormSubmitName={this.handleFormSubmitName}
          handleFormSubmitPhone={this.handleFormSubmitPhone}
          handleFormSubmitEmail={this.handleFormSubmitEmail}
          handleFormSubmitDOB={this.handleFormSubmitDOB}
        />
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
