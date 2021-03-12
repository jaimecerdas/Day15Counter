import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
export function Home(props) {
	return (
		<div
			className="card text-white bg-dark  m-2"
			style={{ width: "60px", height: "90px" }}>
			<div>
				<h1 className="align-middle">{props.startNumber} </h1>
				<h1>
					{" "}
					<i className={props.icon}></i>
				</h1>
			</div>
		</div>
	);
}
Home.propTypes = {
	startNumber: PropTypes.number,
	icon: PropTypes.string
};
