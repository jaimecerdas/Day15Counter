//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application

let counter = 0;
let unidades = 0;
let decenas = 0;
let centenas = 0;
let miles = 0;
let diezmiles = 0;
let cienmiles = 0;

setInterval(function() {
	unidades = counter % 10;

	if (counter > 9 && counter < 100) {
		decenas = Math.trunc(counter / 10);
	}
	if (counter > 99 && counter < 1000) {
		centenas = Math.trunc(counter / 100);
	}
	if (counter > 999 && counter < 10000) {
		miles = Math.trunc(counter / 1000);
	}
	if (counter > 999 && counter < 100000) {
		diezmiles = Math.trunc(counter / 10000);
	}
	if (counter > 9999 && counter < 100000) {
		cienmiles = Math.trunc(counter / 100000);
	}
	counter = counter + 1;
}, 1000);

setInterval(function() {
	ReactDOM.render(
		<div className="row justify-content-center">
			<Home icon="far fa-clock" />
			<Home startNumber={cienmiles} />
			<Home startNumber={diezmiles} />
			<Home startNumber={miles} />
			<Home startNumber={centenas} />
			<Home startNumber={decenas} />
			<Home startNumber={unidades} />
		</div>,
		document.querySelector("#app")
	);
}, 1000);
