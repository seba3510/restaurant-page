import "../styles/contact.css";

//==================================================================

import image1 from "../assets/images/left-bee.png";

//==================================================================

import image2 from "../assets/images/right-bee.png";

//==================================================================

class Contact {

	#content;

	#contact;

	//==================================================================


	constructor() {

		this.#content =
			document.querySelector
				("#content");

		this.#contact =
			document.createElement
				("section");

		this.#contact.setAttribute
			(
				"id",
				"contact"
			);

	} // constructor()

	//==================================================================

	display() {

		this.#content.innerHTML = "";

		this.#contact.innerHTML = "";

		this.#content.appendChild
			(this.#contact);

		this.#displayHeader();

	} // display()

	//==================================================================

	#displayHeader() {

		const header =
			document.createElement
				("header");

		this.#contact.appendChild
			(header);

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
				"bee-1"
			);

		header.appendChild
			(img1);

		const h1 =
			document.createElement
				("h1");

		h1.textContent =
			"Contact Us";

		header.appendChild
			(h1);

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
				"bee-2"
			);

		header.appendChild
			(img2);

		this.#contact.appendChild
			(header);

	} // displayHeader()

	//==================================================================

} // class

//==================================================================

const contact =
	new Contact();

export { contact };