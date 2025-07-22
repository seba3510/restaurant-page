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

	} // constructor()


	//===================================================================

	display() {


		this.#displayPhoneNumber();

		const image =
			document.createElement(
				"img"
			);

		image.setAttribute(
			"src",
			mapImage
		);

		image.setAttribute(
			"alt",
			"Location"
		);

		// const imageContainer =
		// 	document.createElement(
		// 		"div"
		// 	);

		// imageContainer.setAttribute(
		// 	"class",
		// 	"image-container"
		// );

		// imageContainer.appendChild(
		// 	image
		// );

		const para =
			document.createElement(
				"p"
			);

		const address =
			"Apt. 889 6026 Koepp Street, " +
			"West Laelstad, HI 60261";

		para.textContent =
			`🏠 ${address}`;

		this.#content.append(
			para,
			image
		);

	} // display()

	//===================================================================

	#displayPhoneNumber() {

		const container =
			document.createElement(
				"div"
			);

		const para =
			document.createElement(
				"p"
			);

		const phoneNumber =
			"555-555-5555";

		para.textContent =
			`📞 ${phoneNumber}`

		this.#content.appendChild(
			para
		);

	} // displayPhoneNumber()

	//===================================================================

} // class

//===================================================================

export { Contact };