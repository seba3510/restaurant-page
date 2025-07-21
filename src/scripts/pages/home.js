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

	greet() {

		const para =
			document.createElement(
				"p"
			);

		para.textContent =
			"Hello, World!";

		this.#content.appendChild(
			para
		);

	} // greet()

	//====================================================================


} // class

//====================================================================

export { HomePage };