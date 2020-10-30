import React from "react";
import "./FormLabel.css";

function FormLabel(props) {
	return (
		<div>
			<div id="imgColumn" className="border">
				Image
			</div>
			<div onClick={props.handleFormSubmitName} id="nameColumn" className="border">
				Name
			</div>
			<div onClick={props.handleFormSubmitPhone} id="phoneColumn" className="border">
				Phone Number
			</div>
			<div onClick={props.handleFormSubmitEmail} id="emailColumn" className="border">
				Email
			</div>
			<div onClick={props.handleFormSubmitDOB} id="dateOfBirthColumn" className="border">
				DOB
			</div>
		</div>
	);
}

export default FormLabel;