import chefImage
	from "../assets/images/chef.jpg";

//=================================================================================

class HomePage {

	#content;

	//=================================================================================
	constructor() {

		this.#content =
			document.querySelector(
				"#content"
			);

	} // constructor()

	//====================================================================

	displayContent() {

		const wrapperContainer =
			document.createElement(
				"div"
			);

		wrapperContainer.setAttribute(
			"class",
			"wrapper"
		)

		this.#content.appendChild(
			wrapperContainer
		);

		const section =
			document.createElement(
				"section"
			);

		section.setAttribute(
			"class",
			"card"
		);

		wrapperContainer.append(
			section
		);

		const textContents =
			[
				"The best restaurant " +
				"in the world!",
				"Made with passion since 1980",
				"Order online, or visit us!"
			];

		const para1 =
			document.createElement(
				"p"
			);

		para1.textContent =
			textContents[0];

		const div =
			document.createElement(
				"div"
			);

		div.setAttribute(
			"class",
			"image-container"
		);

		const image =
			document.createElement(
				"img"
			);

		image.setAttribute(
			"src",
			chefImage
		);

		image.setAttribute(
			"alt",
			"Chef"
		)

		div.append(
			image
		);

		const para2 =
			document.createElement(
				"p"
			);

		para2.textContent =
			textContents[1];

		const para3 =
			document.createElement(
				"p"
			);

		para3.textContent =
			textContents[2];

		section.append(
			para1,
			para2,
			div,
			para3
		);

	} // displayCard()

	//====================================================================


} // class

//====================================================================

export { HomePage };