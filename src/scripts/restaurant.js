import "../styles/navbar.css";

//===============================================================================

import { homePage } from "./home-page.js";

//===============================================================================

import { menu } from "./menu.js";

//===============================================================================

import { contact } from "./contact.js";

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

	displayMenu() {

		this.#menuBtn.addEventListener("click", (event) => {

			event.preventDefault();

			menu.display();

		}); // addEventListener

	} // displayMenu()

	//===============================================================================

	displayContacts() {

		this.#contactBtn.addEventListener("click", (event) => {

			contact.display();

		}); // adEventListener

	} // displayContacts()

} // class

//===============================================================================

const restaurant =
	new Restaurant();


restaurant.displayHomePage();

restaurant.displayMenu();

restaurant.displayContacts();