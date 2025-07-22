import "./styles/reset.css";

//====================================================================

import "./styles/style.css";

//====================================================================

import {
	RestaurantPage
} from "./scripts/restaurant-page.js";

//====================================================================
import {
	HomePage
} from "./scripts/home.js";

//====================================================================

window.addEventListener("load", () => {

	const homePage =
		new HomePage();

	homePage.display();

	new RestaurantPage();

}); // addEventListener()