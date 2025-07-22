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
				"#home-btn"
			);

		this.#menuBtn =
			document.querySelector(
				"#menu-btn"
			);

		this.#contactBtn =
			document.querySelector(
				"#contact-btn"
			);

		this.#displayHomePage();

		this.#displayMenu();

	} // constructor()

	//====================================================================

	#displayHomePage() {

		this.#homeBtn.addEventListener("click", () => {

			this.#clearContent();

			const homePage =
				new HomePage();

			homePage.display();

		}); // addEventListener()

	} // displayHomePage()

	//====================================================================

	#clearContent() {

		this.#content.textContent = "";

	} // clearContent()

	//====================================================================

	#displayMenu() {

		this.#menuBtn.addEventListener("click", () => {

			this.#clearContent();

			const menu =
				new Menu();

			menu.display();

		}); // addEventListener()

	} // displayMenu()

	//====================================================================

} // class

//====================================================================

export { RestaurantPage };