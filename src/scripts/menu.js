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

		const para =
			document.createElement(
				"p"
			);

		para.textContent =
			"Hello, World!";

		this.#content.append(
			para
		);

	} // display()

	//==================================================================================


} // class


//==================================================================================

export { Menu };