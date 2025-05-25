import "../styles/navbar.css";

//===============================================================================

import "../styles/homepage.css";

//===============================================================================

import { homePage } from "./homepage.js";

//===============================================================================

class Restaurant {

	#homeBtn;

	//===============================================================================

	#menuBtn =
		document.querySelector
			("#menu-btn");

	//===============================================================================

	#contactBtn =
		document.querySelector
			("#contact-btn");

	//===============================================================================

	constructor() {

		this.#homeBtn =
			document.querySelector
				("#home-btn");

		this.#menuBtn =
			document.querySelector
				("#menu-btn");

		this.#contactBtn =
			document.querySelector
				("#contact-btn");

		this.#loadPage();

	} // constructor()

	//===============================================================================

	displayHomePage() {

		this.#homeBtn.addEventListener("click", () => {

			homePage.display();

		}); // addEventListener

	} // displayHomePage()

	//===============================================================================

	#loadPage() {

		window.addEventListener("load", (event) => {

			event.preventDefault();

			homePage.display();

		}); // addEventListener

	} // loadPage()

	//===============================================================================

} // class

//===============================================================================

const restaurant =
	new Restaurant();


restaurant.displayHomePage();
