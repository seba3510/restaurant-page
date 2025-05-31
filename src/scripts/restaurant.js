import "../styles/resets.css";

//===============================================================================

import "../styles/navbar.css";

//===============================================================================

import { homePage } from "./home-page.js";

//===============================================================================

class Restaurant {

	#homeBtn;

	//===============================================================================

	#menuBtn;

	//===============================================================================

	#contactBtn;

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

		this.#homeBtn.addEventListener("click", (event) => {

			event.preventDefault();

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

// restaurant.displayMenu();

// restaurant.displayContacts();