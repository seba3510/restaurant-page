import phoneIcon
	from "../assets/images/icons/telephone.png";

//===================================================================

import mapImage
	from "../assets/images/3d-view-map.jpg";

//===================================================================

class Contact {

	#content;

	#contact;

	//===================================================================

	constructor() {

		this.#content =
			document.querySelector(
				"#content"
			);

		this.#contact =
			document.createElement(
				"section"
			);

		this.#contact.setAttribute(
			"id",
			"contact-info"
		);

		this.#content.appendChild(
			this.#contact
		);

	} // constructor()


	//===================================================================

	display() {

		const address =
			"Apt. 889 6026 Koepp Street, " +
			"West Laelstad, HI 60261";

		this.#displayPhoneNumber();

	} // display()

	//===================================================================

	#displayPhoneNumber() {

		const container =
			document.createElement(
				"div"
			);

		container.setAttribute(
			"class",
			"image-container"
		);

		const icon =
			document.createElement(
				"img"
			);

		icon.setAttribute(
			"src",
			phoneIcon
		);

		icon.setAttribute(
			"alt",
			"Cellphone"
		);

		container.appendChild(
			icon
		);

		const para =
			document.createElement(
				"p"
			);

		const phoneNumber =
			"555-555-5555";

		para.textContent =
			phoneNumber;

		const div =
			document.createElement(
				"div"
			);

		div.setAttribute(
			"class",
			"wrapper"
		);

		div.append(
			container,
			para
		);

		this.#contact.appendChild(
			div
		);

	} // displayPhoneNumber()

	//===================================================================

} // class

//===================================================================

export { Contact };