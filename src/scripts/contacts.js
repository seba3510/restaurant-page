import "../styles/contacts.css";

//==================================================================

import image1 from "../assets/images/left-bee.png";

//==================================================================

import image2 from "../assets/images/right-bee.png";

//==================================================================

class Contacts {

	#content;

	#contacts;

	//==================================================================


	constructor() {

		this.#content =
			document.querySelector
				("#content");

		this.#contacts =
			document.createElement
				("section");

		this.#contacts.setAttribute
			(
				"id",
				"contacts"
			);

	} // constructor()

	//==================================================================

	display() {

		this.#content.innerHTML = "";

		this.#contacts.innerHTML = "";

		this.#content.appendChild
			(this.#contacts);

		this.#displayHeader();

		this.#displayChef();

	} // display()

	//==================================================================

	#displayHeader() {

		const header =
			document.createElement
				("header");

		this.#contacts.appendChild
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

		this.#contacts.appendChild
			(header);

	} // displayHeader()

	//==================================================================

	#displayChef() {

		const container =
			document.createElement
				("section");

		container.setAttribute
			(
				"id",
				"chef"
			);

		const h2 =
			document.createElement
				("h2");

		h2.textContent =
			"Contact #1";

		container.appendChild
			(h2);

		const info =
			document.createElement
				("section");

		info.setAttribute
			(
				"class",
				"info"
			);

		container.appendChild
			(info);

		const role =
			document.createElement
				("h3");

		role.textContent =
			"Chef";

		info.appendChild
			(role);

		const phonNumber =
			document.createElement
				("p");

		phonNumber.textContent =
			"555-555-5554";

		info.appendChild
			(phonNumber);

		const email =
			document.createElement
				("p");

		const link =
			document.createElement
				("a");

		link.setAttribute
			(
				"href",
				"#"
			);

		link.textContent =
			"tejoce3283@eduhed.com";

		email.appendChild
			(link);

		info.appendChild
			(email);

	} // displayChef()

} // class

//==================================================================

const contacts =
	new Contacts();

export { contacts };