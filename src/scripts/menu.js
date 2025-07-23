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

import newIcon
	from "../assets/images/icons/sign.png";

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

		const header =
			document.createElement(
				"header"
			);

		header.appendChild(
			h2
		)

		section.appendChild(
			header
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
			"lunch-specials"
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

		const header =
			document.createElement(
				"header"
			);

		header.appendChild(
			h2
		);

		section.appendChild(
			header
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

			this.#checkLunch(
				lunch,
				header,
				h2,
				para
			);

			div.appendChild(
				header
			);


			section.appendChild(
				div
			);

		} // for

	} // displayLunch()

	//==================================================================================
	#checkLunch(lunch, header, h2, para) {

		const isBuffaloBurger =
			lunch.title ===
			"Buffalo Bill Burger";

		if (isBuffaloBurger) {

			const image =
				document.createElement(
					"img"
				);

			image.setAttribute(
				"src",
				newIcon
			);

			image.setAttribute(
				"alt",
				"New Icon"
			);

			header.append(
				h2,
				image,
				para
			);

		} // if

		else {

			header.append(
				h2,
				para
			);

		} // else

	} // checkLunch()

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

		const message =
			"All entrees served on " +
			"organic brown rice, or " +
			"coconut rice";

		para.textContent =
			message;

		para.style.fontStyle =
			"italic";

		const h2 =
			document.createElement(
				"h2"
			);

		h2.textContent =
			"Entrees";

		const header =
			document.createElement(
				"header"
			);

		header.append(
			h2,
			para
		);

		section.appendChild(
			header
		);

		this.#menu.appendChild(
			section
		);

		for (const entree of entrees) {

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

			const div =
				document.createElement(
					"div"
				);

			div.setAttribute(
				"class",
				"entree"
			)

			div.append(
				h3,
				para
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

		const header =
			document.createElement(
				"header"
			);

		header.appendChild(
			h2
		);

		section.appendChild(
			header
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


			div.append(
				h3,
				para
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

		const header =
			document.createElement(
				"header"
			);

		header.append(
			h2
		);

		section.appendChild(
			header
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