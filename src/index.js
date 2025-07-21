import "./styles/reset.css";

//====================================================================

import "./styles/style.css";

//====================================================================

import {
	RestaurantPage
} from "./scripts/restaurant-page.js";

//====================================================================

import {
	Menu
} from "./scripts/menu.js";

//====================================================================

window.addEventListener("load", () => {


	new RestaurantPage();

}); // addEventListener()