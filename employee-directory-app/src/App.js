import React, { Component } from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FormLabel from "./components/FormLabel";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
  // state = {
  //   employees: employees,
  //   search: "",
  //   sortOrder: "ASC"
  // }
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   // Search will probably happen here
  //   // Filter
  //   // const filteredEmployees = this.state.employees.filter " = []"
  //   // Sort Order (sets state of "sort order")
  //   this.setState({
  //     [name]: value
  //   });
  // };
  // handleFormSubmit = event => {
  // }

  render() {
    return (
      <>
        <h1>Hi!</h1>
        <Header />
        <SearchBar />
        <FormLabel />
        <EmployeeCard />
      </>
    );
  }
}

export default App;
