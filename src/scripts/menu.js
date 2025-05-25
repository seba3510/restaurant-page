import "../styles/menu.css";

//=======================================================================================

import image1 from "../assets/images/left-bee.png";

//=======================================================================================

import image2 from "../assets/images/right-bee.png";

//=======================================================================================

class Menu {

	#content;

	//=======================================================================================
	constructor() {

		this.#content =
			document.querySelector
				("#content");

	} // constructor()

	//=======================================================================================

	display() {

		this.#content.innerHTML = "";

		this.#displayHeader();

		// this.#displayBeverages();

	} // display()

	//=======================================================================================

	#displayHeader() {

		const header =
			document.createElement
				("header");

		header.setAttribute
			(
				"id",
				"menu-title"
			);

		const img1 =
			document.createElement
				("img");

		img1.setAttribute
			(
				"src",
				image1
			);

		img1.setAttribute
			(
				"alt",
				"This is a bee."
			);

		img1.setAttribute
			(
				"id",
				"left-bee"
			);

		header.appendChild
			(img1);

		const h1 =
			document.createElement
				("h1");

		h1.textContent =
			"Menu";

		header.appendChild(h1);

		const img2 =
			document.createElement
				("img");

		img2.setAttribute
			(
				"src",
				image2
			);

		img2.setAttribute
			(
				"alt",
				"This is another bee."
			);

		img2.setAttribute
			(
				"id",
				"right-bee"
			);

		header.appendChild(img2);

		this.#content.appendChild
			(header);

	} // displayHeader()

	//=======================================================================================

	#displayBeverages() {



	} // displayBeverages()

	//=======================================================================================



} // class

//=======================================================================================

const menu =
	new Menu();

export { menu };