import {
	starters
} from "../data/starters.js";

//==================================================================================

class Menu {

	#content;

	//==================================================================================

	constructor() {

		this.#content =
			document.querySelector(
				"#content"
			);

	} // constructor()

	//==================================================================================

	display() {

		this.#content.textContent = "";

		this.#displayStarters();

	} // display()

	//==================================================================================

	#displayStarters() {

		const menu =
			document.createElement(
				"section"
			);

		menu.setAttribute(
			"id",
			"menu"
		);

		this.#content.appendChild(
			menu
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
			"Starters";

		header.appendChild(
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

			const para1 =
				document.createElement(
					"p"
				);

			para1.textContent =
				starter.price;

			header.append(
				h2,
				para1
			);

			const para2 =
				document.createElement(
					"p"
				);

			para2.textContent =
				starter.description;

			div.append(
				header,
				para2
			);

			menu.append(
				div
			)



		} // for

	} // displayStarters()

	//==================================================================================


} // class


//==================================================================================

export { Menu };