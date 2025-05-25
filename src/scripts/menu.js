import "../styles/menu.css";

//=======================================================================================
class Menu {

	#content;

	//=======================================================================================
	constructor() {

		this.#content =
			document.querySelector
				("#content");

	} // constructor()

	//=======================================================================================

	display() {

		this.#content.innerHTML = "";

		const para =
			document.createElement
				("p");

		para.textContent =
			"Hello, World!";

		this.#content.appendChild
			(para);

	} // display()

} // class

//=======================================================================================

const menu =
	new Menu();

export { menu };