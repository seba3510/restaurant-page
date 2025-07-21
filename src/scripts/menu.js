import {
	starters
} from "../data/starters.js";

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


} // class


//==================================================================================

export { Menu };