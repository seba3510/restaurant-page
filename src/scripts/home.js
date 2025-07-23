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

	display() {

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
		);

		image.setAttribute(
			"class",
			"chef"
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

		this.#content.append(
			para1,
			para2,
			image,
			para3
		);

	} // display()

	//====================================================================


} // class

//====================================================================

export { HomePage };