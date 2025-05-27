import "../styles/menu.css";
//=======================================================================================

import image1 from "../assets/images/left-bee.png";

//=======================================================================================

import image2 from "../assets/images/right-bee.png";

//=======================================================================================
class Menu {

	#content;

	#menu;

	//=======================================================================================
	constructor() {

		this.#content =
			document.querySelector
				("#content");

		this.#menu =
			document.createElement
				("section");

		this.#menu.setAttribute
			(
				"id",
				"menu"
			);

	} // constructor()

	//=======================================================================================

	display() {

		this.#content.innerHTML = "";

		this.#displayHeader();

		this.#content.appendChild
			(this.#menu);

		// this.#displayBeverages();

		// this.#displayAppetizers();

	} // display()

	//=======================================================================================

	#displayHeader() {

		const header =
			document.createElement
				("header");

		header.setAttribute
			(
				"class",
				"title"
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

		this.#menu.appendChild(header);

	} // displayHeader()

	//=======================================================================================

	#displayBeverages() {

		const selectors =
			[
				"beverages",
				"honey-tea",
				"berry-tea"
			];

		const beverages =
			document.createElement
				("section");

		beverages.setAttribute
			(
				"id",
				selectors[0]
			);

		const h2 =
			document.createElement
				("h2");

		h2.textContent =
			"Beverages";

		beverages.appendChild(h2);

		const honeyTea =
			document.createElement
				("section");

		honeyTea.setAttribute
			(
				"id",
				selectors[1]
			);

		this.#displayHoneyTea
			(
				honeyTea,
				beverages,
			);

		const berryTea =
			document.createElement
				("section");

		berryTea.setAttribute
			(
				"id",
				selectors[2]
			);

		this.#displayBerryTea
			(
				berryTea,
				beverages
			);

		this.#menu.appendChild
			(beverages);

	} // displayBeverages()

	//=======================================================================================

	#displayBerryTea(berryTea, beverages) {

		const h3 =
			document.createElement
				("h3");

		h3.textContent =
			"Berry Tea";

		berryTea.appendChild(h3);

		const para =
			document.createElement
				("p");

		para.textContent =
			"$5";

		berryTea.appendChild(para);

		beverages.appendChild(berryTea);

	} // displayBerryTea()

	//=======================================================================================

	#displayHoneyTea(honeyTea, beverages) {

		const h3 =
			document.createElement
				("h3");

		h3.textContent =
			"Honey Tea";

		honeyTea.appendChild
			(h3);

		const para =
			document.createElement
				("p");

		para.textContent =
			"$5";

		honeyTea.appendChild
			(para);

		beverages.appendChild(honeyTea);

	} // displayHoneyTea()

	//=======================================================================================

	#displayAppetizers() {

		const selectors =
			[
				"appetizers",
				"toast",
				"fruit"
			];

		const appetizers =
			document.createElement
				("section");

		appetizers.setAttribute
			(
				"id",
				selectors[0]
			);

		const h2 =
			document.createElement
				("h2");

		h2.textContent =
			"Appetizers";

		appetizers.appendChild
			(h2);

		this.#displayToast
			(
				selectors,
				appetizers
			);

		const fruit =
			document.createElement
				("section");

		fruit.setAttribute
			(
				"id",
				selectors[2]
			);

		const h3 =
			document.createElement
				("h3")

		h3.textContent =
			"Fresh Fruit";

		fruit.appendChild(h3);

		const para =
			document.createElement
				("p");

		para.textContent =
			"$3";

		fruit.appendChild
			(para);

		appetizers.appendChild
			(fruit);

		this.#menu.appendChild
			(appetizers);

	} // displayAppetizers()

	//=======================================================================================

	#displayToast(selectors, appetizers) {

		const toast =
			document.createElement
				("section");

		toast.setAttribute
			(
				"id",
				selectors[1]
			);

		const h3 =
			document.createElement
				("h3");

		h3.textContent =
			"Toast and Jam";

		toast.appendChild(h3);

		const para =
			document.createElement
				("p");

		para.textContent =
			"$1";

		toast.appendChild
			(para);

		appetizers.appendChild
			(toast);

	} // displayToast()

	//=======================================================================================

} // class

//=======================================================================================

const menu =
	new Menu();

export { menu };