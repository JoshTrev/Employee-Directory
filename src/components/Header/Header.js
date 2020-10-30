import React from "react";
import "./Header.css";

function Header(props) {
	return (
		<>
		<div id="mainHead">
			<h1>Employee Directory</h1>
			<p>Use the Search Bar below to search for employees. Clicking the categories below will sort the results by the category name.</p>
		</div>
		<div id="line"></div>
		</>
	);
}

export default Header;