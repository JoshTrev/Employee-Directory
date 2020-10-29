import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FormLabel from "./components/FormLabel";
import EmployeeCard from "./components/EmployeeCard";

function App() {
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

export default App;
