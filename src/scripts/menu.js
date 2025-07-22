import {
	starters
} from "../data/starters.js";

//==================================================================================

import {
	lunchSpecials
} from "../data/lunch-specials.js";

//==================================================================================

import {
	entrees
} from "../data/entrees.js";

//==================================================================================

import {
	pizzas
} from "../data/pizzas.js";

//==================================================================================

import {
	healthySides
} from "../data/sides.js";

//==================================================================================

class Menu {

	#content;

	#menu;

	//==================================================================================

	constructor() {

		this.#content =
			document.querySelector(
				"#content"
			);

		this.#content.textContent = "";

		this.#menu =
			document.createElement(
				"section"
			);

		this.#menu.setAttribute(
			"id",
			"menu"
		);

		this.#content.appendChild(
			this.#menu
		);

	} // constructor()

	//==================================================================================

	display() {

		const h1 =
			document.createElement(
				"h1"
			);

		h1.textContent =
			"Menu";

		const header =
			document.createElement(
				"header"
			);

		header.appendChild(
			h1
		);

		this.#menu.appendChild(
			header
		);

		this.#displayStarters();

		this.#displayLunch();

		this.#displayEntrees();

		this.#displayPizzas();

		this.#displayHealthySides();

	} // display()

	//==================================================================================

	#displayStarters() {

		const section =
			document.createElement(
				"section"
			);

		section.setAttribute(
			"id",
			"starters"
		);

		this.#menu.appendChild(
			section
		);

		const h2 =
			document.createElement(
				"h2"
			);

		h2.textContent =
			"Starters";

		section.appendChild(
			h2
		);

		for (const starter of starters) {

			const div =
				document.createElement(
					"div"
				);

			div.setAttribute(
				"class",
				"starter"
			);

			const header =
				document.createElement(
					"header"
				);

			const h2 =
				document.createElement(
					"h2"
				);

			h2.textContent =
				starter.title;

			const para =
				document.createElement(
					"p"
				);

			para.textContent =
				this.#formatPrice(
					starter.price
				);

			header.append(
				h2,
				para
			);

			div.appendChild(
				header
			);

			const small =
				document.createElement(
					"small"
				);

			small.textContent =
				starter.description;

			div.append(
				header,
				small
			);

			section.appendChild(
				div
			);

		} // for

	} // displayStarters()

	//==================================================================================

	#formatPrice(price) {

		const formatter =
			new Intl.NumberFormat(
				"en-US",
				{
					style: "currency",
					currency: "USD",
					minimumFractionDigits: 2
				}
			);

		const formattedPrice =
			formatter.format(
				price
			);

		return formattedPrice;

	} // formatPrice()

	//==================================================================================

	#displayLunch() {

		const section =
			document.createElement(
				"section"
			);

		section.setAttribute(
			"id",
			"lunch"
		);

		this.#menu.appendChild(
			section
		);

		const h2 =
			document.createElement(
				"h2"
			);

		h2.textContent =
			"Lunch Specials";

		section.appendChild(
			h2
		);

		for (const lunch of lunchSpecials) {

			const div =
				document.createElement(
					"div"
				);

			div.setAttribute(
				"class",
				"lunch"
			);

			const header =
				document.createElement(
					"header"
				);

			const h2 =
				document.createElement(
					"h2"
				);

			h2.textContent =
				lunch.title;

			const para =
				document.createElement(
					"p"
				);

			para.textContent =
				this.#formatPrice(
					lunch.price
				);

			header.append(
				h2,
				para
			);

			div.appendChild(
				header
			);

			const small =
				document.createElement(
					"small"
				);

			small.textContent =
				lunch.description;

			div.append(
				header,
				small
			);

			section.appendChild(
				div
			);

		} // for

	} // displayLunch()

	//==================================================================================

	#displayEntrees() {

		const section =
			document.createElement(
				"section"
			);

		section.setAttribute(
			"id",
			"entrees"
		);

		const para =
			document.createElement(
				"p"
			);

		const h2 =
			document.createElement(
				"h2"
			);

		h2.textContent =
			"Entrees";

		section.appendChild(
			h2
		);

		const message =
			"All entrees served on " +
			"organic brown rice, or " +
			"coconut rice";

		para.textContent =
			message;

		section.appendChild(
			para
		);

		this.#menu.appendChild(
			section
		);

		for (const entree of entrees) {

			const div =
				document.createElement(
					"div"
				);

			div.setAttribute(
				"class",
				"entree"
			);

			const h3 =
				document.createElement(
					"h3"
				);

			h3.textContent =
				entree.title;

			const para =
				document.createElement(
					"p"
				);

			para.textContent =
				this.#formatPrice(
					entree.price
				);

			const header =
				document.createElement(
					"header"
				);

			header.append(
				h3,
				para
			);

			const small =
				document.createElement(
					"small"
				);

			small.textContent =
				entree.description;

			div.append(
				header,
				small
			);

			section.appendChild(
				div
			);

		} // for

	} // displayEntrees()

	//==================================================================================

	#displayPizzas() {

		const section =
			document.createElement(
				"section"
			);

		section.setAttribute(
			"id",
			"pizzas"
		);

		const h2 =
			document.createElement(
				"h2"
			);

		h2.textContent =
			"Pizzas";

		section.appendChild(
			h2
		);

		this.#menu.appendChild(
			section
		);

		for (const pizza of pizzas) {

			const div =
				document.createElement(
					"div"
				);

			div.setAttribute(
				"class",
				"pizza"
			);

			const h3 =
				document.createElement(
					"h3"
				);

			h3.textContent =
				pizza.title;

			const para =
				document.createElement(
					"p"
				);

			para.textContent =
				this.#formatPrice(
					pizza.price
				);

			const header =
				document.createElement(
					"header"
				);

			header.append(
				h3,
				para
			);

			const small =
				document.createElement(
					"small"
				);

			small.textContent =
				pizza.description;

			div.append(
				header,
				small
			);

			section.appendChild(
				div
			);

		} // for

	} // displayPizzas()

	//==================================================================================

	#displayHealthySides() {

		const section =
			document.createElement(
				"section"
			);

		section.setAttribute(
			"id",
			"sides"
		);

		const h2 =
			document.createElement(
				"h2"
			);

		h2.textContent =
			"Healthy Sides";

		section.appendChild(
			h2
		);

		this.#menu.appendChild(
			section
		);

		for (const side of healthySides) {

			const div =
				document.createElement(
					"div"
				);

			div.setAttribute(
				"class",
				"side"
			);

			const h3 =
				document.createElement(
					"h3"
				);

			h3.textContent =
				side.title;

			const para =
				document.createElement(
					"p"
				);

			para.textContent =
				this.#formatPrice(
					side.price
				);

			const header =
				document.createElement(
					"header"
				);

			div.append(
				h3,
				para
			);

			section.appendChild(
				div
			);

		} // for

	} // displayHealthySides()

} // class


//==================================================================================

export { Menu };