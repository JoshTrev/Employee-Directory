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
    sortByName: true,
    sortByPhone: false,
    sortByEmail: false,
    sortByDOB: false,
    sortByNameASC: true,
    sortByPhoneASC: false,
    sortByEmailASC: false,
    sortByDOBASC: false,
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

    // If the chose category is already sortByName and sortByNameASC is true, sort results by ASC order.
    if (this.state.sortByNameASC === true && this.state.sortByName === true && this.state.orderedEmployees !== "") {
      console.log("Sort ASC");
      newOrderedEmployees = this.state.orderedEmployees.sort();
      this.setState({
        sortByNameASC: false
      });
    }
    // If the chose category is already sortByName and sortByNameASC is false, sort results by DES order.
    if (this.state.sortByNameASC === false && this.state.sortByName === true && this.state.orderedEmployees !== "") {
      console.log("Sort DES");
      newOrderedEmployees = this.state.orderedEmployees.sort().reverse();
      this.setState({
        sortByNameASC: true
      });
    }

    this.setState({
      sortByName: true,
      sortByPhone: false,
      sortByEmail: false,
      sortByDOB: false,
      orderedEmployees: newOrderedEmployees
    });
  }
  handleFormSubmitPhone = event => {
    event.preventDefault();

    var newOrderedEmployees = [];

    // If the chose category is already sortByPhone and sortByPhoneASC is true, sort results by ASC order.
    if (this.state.sortByPhoneASC === true && this.state.sortByPhone === true && this.state.orderedEmployees !== "") {
      console.log("Sort ASC");
      newOrderedEmployees = this.state.orderedEmployees.sort();
      this.setState({
        sortByPhoneASC: false
      });
    }
    // If the chose category is already sortByPhone and sortByPhoneASC is false, sort results by DES order.
    if (this.state.sortByPhoneASC === false && this.state.sortByPhone === true && this.state.orderedEmployees !== "") {
      console.log("Sort DES");
      newOrderedEmployees = this.state.orderedEmployees.sort().reverse();
      this.setState({
        sortByPhoneASC: true
      });
    }

    this.setState({
      sortByName: false,
      sortByPhone: true,
      sortByEmail: false,
      sortByDOB: false,
      orderedEmployees: newOrderedEmployees
    });
  }
  handleFormSubmitEmail = event => {
    event.preventDefault();
    
    var newOrderedEmployees = [];

    // If the chose category is already sortByEmail and sortByEmailASC is true, sort results by ASC order.
    if (this.state.sortByEmailASC === true && this.state.sortByEmail === true && this.state.orderedEmployees !== "") {
      console.log("Sort ASC");
      newOrderedEmployees = this.state.orderedEmployees.sort();
      this.setState({
        sortByEmailASC: false
      });
    }
    // If the chose category is already sortByEmail and sortByEmailASC is false, sort results by DES order.
    if (this.state.sortByEmailASC === false && this.state.sortByEmail === true && this.state.orderedEmployees !== "") {
      console.log("Sort DES");
      newOrderedEmployees = this.state.orderedEmployees.sort().reverse();
      this.setState({
        sortByEmailASC: true
      });
    }

    this.setState({
      sortByName: false,
      sortByPhone: false,
      sortByEmail: true,
      sortByDOB: false,
      orderedEmployees: newOrderedEmployees
    });
  }
  handleFormSubmitDOB = event => {
    event.preventDefault();
    
    var newOrderedEmployees = [];

    // If the chose category is already sortByDOB and sortByDOBASC is true, sort results by ASC order.
    if (this.state.sortByDOBASC === true && this.state.sortByDOB === true && this.state.orderedEmployees !== "") {
      console.log("Sort ASC");
      newOrderedEmployees = this.state.orderedEmployees.sort();
      this.setState({
        sortByDOBASC: false
      });
    }
    // If the chose category is already sortByDOB and sortByDOBASC is false, sort results by DES order.
    if (this.state.sortByDOBASC === false && this.state.sortByDOB === true && this.state.orderedEmployees !== "") {
      console.log("Sort DES");
      newOrderedEmployees = this.state.orderedEmployees.sort().reverse();
      this.setState({
        sortByDOBASC: true
      });
    }

    this.setState({
      sortByName: false,
      sortByPhone: false,
      sortByEmail: false,
      sortByDOB: true,
      orderedEmployees: newOrderedEmployees
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
