import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
	return (
		<>
		<input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder={props.placeholder}
          id="search"
        />
		<button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
		</>
	);
}

export default SearchBar;