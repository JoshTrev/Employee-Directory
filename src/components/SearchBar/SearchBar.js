import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div id="searchDiv">
      <div id="searchBar">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employees"
          id="search"
        />
      </div>
      <div id="searchButton">
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;