import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card">
			<div className="card-body">
				<p className="card-text">{props.startNumber}</p>
			</div>
		</div>
	);
}

Card.propTypes = {
	startNumber: PropTypes.number
};
