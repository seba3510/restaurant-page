import image1 from "../assets/images/left-bee.png";

//===============================================================================

import image2 from "../assets/images/right-bee.png";

//===============================================================================

import "../styles/home.css";

//===============================================================================

class HomePage {


	#content;

	#home;

	//=====================================================================================================================================

	constructor() {

		this.#content =
			document.querySelector
				("#content");

		this.#home =
			document.createElement
				("section");

		this.#home.setAttribute
			(
				"id",
				"home"
			);

		this.#content.appendChild
			(this.#home);

	} // constructor()

	//=====================================================================================================================================

	display() {

		this.#home.innerHTML = "";

		this.#displayHeader();

		this.#displayDescription();

		this.#displayBusinessHours();

		this.#displayLocation();

	} // display()

	//=====================================================================================================================================

	#displayHeader() {

		const header =
			document.createElement
				("header");

		this.#home.appendChild
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
				"left-bee"
			);

		header.appendChild
			(img1);

		const h1 =
			document.createElement
				("h1");

		h1.textContent =
			"Beary's Breakfast Bar";

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
				"right-bee"
			);

		header.appendChild
			(img2);

	} // displayHeader()

	//=====================================================================================================================================

	#displayDescription() {

		const container =
			document.createElement
				("section");

		container.setAttribute
			(
				"id",
				"description"
			);

		const h2 =
			document.createElement
				("h2");

		h2.textContent =
			"About Us"

		container.appendChild
			(h2);

		const para =
			document.createElement
				("p");

		const text =
			"Beary's has the best porridge! " +
			"The atmosphere and customer service make you " +
			"feel like you are sitting in the middle of the " +
			"woods, eating like a bear! This is exactly the kind " +
			"of place that I like to return again and again.";

		para.textContent =
			text;

		container.appendChild
			(para);

		this.#home.appendChild
			(container);

	} // displayDescription()

	//=====================================================================================================================================

	#displayBusinessHours() {

		const container =
			document.createElement
				("section");

		container.setAttribute
			(
				"id",
				"hours"
			);

		this.#home.appendChild
			(container);

		const hours =
			[
				"Sunday: 8am - 8pm",
				"Monday: 6am - 6pm",
				"Tuesday: 6am - 6pm",
				"Wednesday: 6am - 6pm",
				"Thursday: 6am - 10pm",
				"Friday: 6am - 10pm",
				"Saturday: 8am - 6pm"
			];

		const h2 =
			document.createElement
				("h2");

		h2.textContent =
			"Business Hours";

		container.appendChild(h2);

		this.#createUnorderedList
			(
				hours,
				container
			);

		this.#home.appendChild
			(container);

	} // displayBusinessHours()

	//=====================================================================================================================================

	#createUnorderedList(hours, container) {

		const ul =
			document.createElement("ul");

		const n = 7;

		for (let i = 0; i < n; i++) {

			const li =
				document.createElement
					("li");

			li.textContent =
				hours[i];

			ul.appendChild(li);

		} // for

		container.appendChild(ul);

	} // createUnorderedList()

	//=====================================================================================================================================

	#displayLocation() {

		const container =
			document.createElement
				("section");

		container.setAttribute
			(
				"id",
				"location"
			);

		this.#home.appendChild
			(container);

		const h2 =
			document.createElement
				("h2");

		h2.textContent =
			"Location";

		container.appendChild(h2);

		const para =
			document.createElement
				("p");

		const location =
			"123 Forest Drive, Forestville, Maine";

		para.textContent =
			location;

		container.appendChild
			(para);

	} // displayLocation()

	//=====================================================================================================================================


} // class

//=====================================================================================================================================

const homePage =
	new HomePage();

export { homePage };