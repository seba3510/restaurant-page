import {
	HomePage
} from "./home.js";

//====================================================================

import {
	Menu
} from "./menu.js";

//====================================================================

class RestaurantPage {

	#content;
	#homeBtn;

	#menuBtn;

	#contactBtn;

	//====================================================================

	constructor() {

		this.#content =
			document.querySelector(
				"#content"
			);

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

		this.#displayHomePage();

		this.#displayMenu();

	} // constructor()

	//====================================================================

	#displayHomePage() {

		this.#homeBtn.addEventListener("click", () => {

			this.#content.textContent = ""

			const homePage =
				new HomePage();

			homePage.display();

		}); // addEventListener()

	} // displayHomePage()

	//====================================================================

	#displayMenu() {

		this.#menuBtn.addEventListener("click", () => {

			const menu =
				new Menu();

			menu.display();

		}); // addEventListener()


	} // displayMenu()



} // class

//====================================================================

export { RestaurantPage };