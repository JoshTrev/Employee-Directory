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
    sortNameASC: true,
    sortPhoneASC: true,
    sortEmailASC: true,
    sortDOBASC: true
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // Searching all employees by name
    var filteredEmployeesName = this.state.employees.filter(person => person.name.includes(this.state.search));

    // Searching all employees by phone number
    var filteredEmployeesPhone = this.state.employees.filter(person => person.phone.includes(this.state.search));

    // Searching all employees by email
    var filteredEmployeesEmail = this.state.employees.filter(person => person.email.includes(this.state.search));

    // Searching all employees by date of birth
    var filteredEmployeesDOB = this.state.employees.filter(person => person.dateOfBirth.includes(this.state.search));

    // Adding up all the searches together using "new Set" to avoid duplications
    var newArrayOfEmployees = [...new Set([...filteredEmployeesName,...filteredEmployeesPhone,...filteredEmployeesEmail,...filteredEmployeesDOB])]

    // Reset the search after the user has pressed the search button.
    this.setState({
      search: "",
      orderedEmployees: newArrayOfEmployees
    });
  }

  // Click to select search category. Also clicking again will toggle order.
  handleFormSubmitName = event => {
    event.preventDefault();

    // If we are sorting names by Ascending Order, sort by "name" then switch order variable so we can search by Decending order next click
    if (this.state.sortNameASC){
      var newOrderedEmployees = this.state.orderedEmployees.sort((a, b) => (a.name > b.name) ? 1: -1).reverse();

      this.setState({
        orderedEmployees: newOrderedEmployees,
        sortNameASC: false,
      });
    }else{
      newOrderedEmployees = this.state.orderedEmployees.sort((a, b) => (a.name > b.name) ? 1: -1);

      this.setState({
        orderedEmployees: newOrderedEmployees,
        sortNameASC: true,
      });
    }

    this.setState({
      orderedEmployees: newOrderedEmployees,
    });
  }
  handleFormSubmitPhone = event => {
    event.preventDefault();

    // If we are sorting names by Ascending Order, sort by "phone" then switch order variable so we can search by Decending order next click
    if (this.state.sortPhoneASC){
      var newOrderedEmployees = this.state.orderedEmployees.sort((a, b) => (a.phone > b.phone) ? 1: -1).reverse();

      this.setState({
        orderedEmployees: newOrderedEmployees,
        sortPhoneASC: false,
      });
    }else{
      newOrderedEmployees = this.state.orderedEmployees.sort((a, b) => (a.phone > b.phone) ? 1: -1);

      this.setState({
        orderedEmployees: newOrderedEmployees,
        sortPhoneASC: true,
      });
    }

    this.setState({
      orderedEmployees: newOrderedEmployees,
    });
  }
  handleFormSubmitEmail = event => {
    event.preventDefault();

    // If we are sorting names by Ascending Order, sort by "email" then switch order variable so we can search by Decending order next click
    if (this.state.sortEmailASC){
      var newOrderedEmployees = this.state.orderedEmployees.sort((a, b) => (a.email > b.email) ? 1: -1).reverse();

      this.setState({
        orderedEmployees: newOrderedEmployees,
        sortEmailASC: false,
      });
    }else{
      newOrderedEmployees = this.state.orderedEmployees.sort((a, b) => (a.email > b.email) ? 1: -1);

      this.setState({
        orderedEmployees: newOrderedEmployees,
        sortEmailASC: true,
      });
    }

    this.setState({
      orderedEmployees: newOrderedEmployees,
    });
  }
  handleFormSubmitDOB = event => {
    event.preventDefault();

    // If we are sorting names by Ascending Order, sort by "date of birth" then switch order variable so we can search by Decending order next click
    if (this.state.sortDOBASC){
      var newOrderedEmployees = this.state.orderedEmployees.sort((a, b) => (a.dateOfBirth > b.dateOfBirth) ? 1: -1).reverse();

      this.setState({
        orderedEmployees: newOrderedEmployees,
        sortDOBASC: false,
      });
    }else{
      newOrderedEmployees = this.state.orderedEmployees.sort((a, b) => (a.dateOfBirth > b.dateOfBirth) ? 1: -1);

      this.setState({
        orderedEmployees: newOrderedEmployees,
        sortDOBASC: true,
      });
    }

    this.setState({
      orderedEmployees: newOrderedEmployees,
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
            image={person.image}
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
