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

		this.#content.appendChild
			(this.#menu);

		this.#displayHeader();

		this.#displayStarters();

	} // display()

	//=======================================================================================

	#displayHeader() {

		const header =
			document.createElement
				("header");

		this.#menu.appendChild(header);

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

		header.appendChild(img1);

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

	} // displayHeader()


	//=======================================================================================

	#displayStarters() {

		const container =
			document.createElement
				("section");

		container.setAttribute
			(
				"id",
				"starters"
			);

		this.#menu.appendChild(container);

		const h1 =
			document.createElement
				("h1");

		h1.textContent =
			"Starters";

		container.appendChild(h1);

		const names =
			[
				"Starter #1",
				"Starter #2",
				"Starter #3"
			];

		const descriptions =
			[
				"Ut blandit massa at arcu rhoncus, quis porttitor mauris viverra.",
				"Curabitur magna mauris, pulvinar eget arcu vitae, ullamcorper euismod sem. Quisque non mi nec tellus euismod porttitor at quis tellus. ",
				"Pellentesque in est metus. Curabitur luctus ut purus et vehicula. Phasellus ut laoreet ligula. Aenean interdum purus mollis vestibulum sollicitudin."
			];

		const prices =
			[
				"$6.95",
				"$13.00",
				"$7.25"
			];

		const starters =
			[
				{
					name: names[0],
					description: descriptions[0],
					price: prices[0]
				},
				{
					name: names[1],
					description: descriptions[1],
					price: prices[1]
				},
				{
					name: names[2],
					description: descriptions[2],
					price: prices[2]
				}
			];

		const n =
			starters.length;

		for (let i = 0; i < n; i++) {

			const starter =
				document.createElement
					("section");

			starter.setAttribute
				(
					"class",
					`starter-${i + 1}`
				);

			container.appendChild(starter);

			const h2 =
				document.createElement
					("h2");

			h2.textContent =
				starters[i].name;

			starter.appendChild(h2);

			const span =
				document.createElement
					("span");

			span.textContent =
				starters[i].price;

			starter.appendChild(span);

			const para =
				document.createElement
					("p");

			para.textContent =
				starters[i].description;

			starter.appendChild(para);

		} // for


	} // displayStarters()

	//=======================================================================================

} // class

//=======================================================================================

const menu =
	new Menu();

export { menu };