import React from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
	return (
		<div>
			<div id="img" className="border-bottom">
			<img alt={props.name} src={props.image} />
			</div>
			<div id="name" className="border-bottom">
				{props.name}
			</div>
			<div id="phone" className="border-bottom">
				{props.phone}
			</div>
			<div id="email" className="border-bottom">
				{props.email}
			</div>
			<div id="dateOfBirth" className="border-bottom">
				{props.dateOfBirth}
			</div>
		</div>
	);
}

export default EmployeeCard;