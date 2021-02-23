import React from "react";
import "./EmployeeCard.css";

import SpongeBobSquarePants from "../../assets/img/SpongeBobSquarePants.png";
import PatrickStar from "../../assets/img/PatrickStar.png";
import SquidwardTenticles from "../../assets/img/SquidwardTenticles.png";
import MrKrabs from "../../assets/img/MrKrabs.png";
import SandyCheeks from "../../assets/img/SandyCheeks.png";
import Plankton from "../../assets/img/Plankton.png";
import GaryTheSnail from "../../assets/img/GaryTheSnail.png";

// Creating objects to compare to our .JSON database as reference
const employee1 = {
	employeeName: "SpongeBobSquarePants",
	employeeImage: SpongeBobSquarePants
};

const employee2 = {
	employeeName: "PatrickStar",
	employeeImage: PatrickStar
};

const employee3 = {
	employeeName: "SquidwardTenticles",
	employeeImage: SquidwardTenticles
};

const employee4 = {
	employeeName: "MrKrabs",
	employeeImage: MrKrabs
};

const employee5 = {
	employeeName: "SandyCheeks",
	employeeImage: SandyCheeks
};

const employee6 = {
	employeeName: "Plankton",
	employeeImage: Plankton
};

const employee7 = {
	employeeName: "GaryTheSnail",
	employeeImage: GaryTheSnail
};

// Creating new array and pushing our objects to it
const employeeArray = [];

employeeArray.push(employee1, employee2, employee3, employee4, employee5, employee6, employee7);

// Function to determine which image to load based on our prop information from the .JSON file containing our employees
function DetermineWhichImageToLoad(name){

	let employeeImg;

	for (let i = 0; i < employeeArray.length; i++){
		if (name === employeeArray[i].employeeName){
			employeeImg = employeeArray[i].employeeImage;

			return employeeImg;
		}
	}
}

function EmployeeCard(props) {
	return (
		<div>
			<div id="img" className="border-bottom">
			<img alt={props.name} src={DetermineWhichImageToLoad(props.image)} />
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