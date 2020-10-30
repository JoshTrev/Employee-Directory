import React from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
	return (
		<div>
			<div id="img">
				Img Goes Here
			</div>
			<div id="name">
				{props.name}
			</div>
			<div id="phone">
				{props.phone}
			</div>
			<div id="email">
				{props.email}
			</div>
			<div id="dateOfBirth">
				{props.dateOfBirth}
			</div>
		</div>
	);
}

export default EmployeeCard;