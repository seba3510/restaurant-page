import {
	HomePage
} from "./home.js";

//====================================================================

class RestaurantPage {

	#homeBtn;

	#menuBtn;

	#contactBtn;

	#homePage;

	//====================================================================
	constructor() {

		this.#homeBtn =
			document.querySelector(
				"button#home"
			);

		this.#menuBtn =
			document.querySelector(
				"button#menu"
			);

		this.#contactBtn =
			document.querySelector(
				"button#contact"
			);

		this.#homePage =
			new HomePage();

		this.#homePage
			.display();

	} // constructor()

	//====================================================================



} // class

//====================================================================

export { RestaurantPage };