import "../styles/menu.css";

//=======================================================================================

import image1 from "../assets/images/left-bee.png";

//=======================================================================================

import image2 from "../assets/images/right-bee.png";

//=======================================================================================

class Menu {

	#header;

	#menu;

	//=======================================================================================

	constructor() {

		this.#header =
			document.querySelector
				("#menu-header");

		this.#menu =
			document.querySelector
				("#content");

	} // constructor()

	//=======================================================================================

	display() {


		this.#menu.innerHTML = "";

		this.#displayHeader();

		this.#displayStarters();

		this.#displayEntrees();

		this.#displayLunches();

		this.#displayPizzas();

	} // display()

	//=======================================================================================

	#displayHeader() {

		this.#header.innerHTML = "";

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

		this.#header.appendChild
			(img1);

		const h1 =
			document.createElement
				("h1");

		h1.textContent =
			"Menu";

		this.#header.appendChild(h1);

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

		this.#header.appendChild
			(img2);

	} // displayHeader()

	//=======================================================================================

	#displayStarters() {

		const container =
			document.createElement
				("section");

		container.setAttribute
			(
				"id",
				"starters"
			);

		this.#menu.appendChild
			(container);

		const h1 =
			document.createElement
				("h1");

		h1.textContent =
			"Starters";

		container.appendChild
			(h1);

		const names =
			[
				"Goat Cheese Spread",
				"Antipasti",
				"Soup/Salad Combo"
			];

		const description1 =
			"Locally sourced goat cheese with farm fresh " +
			"baked whole grain."

		const description2 =
			"Artisanal cheese, prosciutto, " +
			"and roasted olives."

		const description3 =
			"A smaller version of the salad of your " +
			"choice, served with a small Soup of the Week."

		const descriptions =
			[
				description1,
				description2,
				description3
			];

		const prices =
			[
				"$6.95",
				"$13.00",
				"$7.25"
			];

		const starters =
			[
				{
					name: names[0],
					description: descriptions[0],
					price: prices[0]
				},
				{
					name: names[1],
					description: descriptions[1],
					price: prices[1]
				},
				{
					name: names[2],
					description: descriptions[2],
					price: prices[2]
				}
			];

		const n =
			starters.length;

		for (let i = 0; i < n; i++) {

			const starter =
				document.createElement
					("section");

			starter.setAttribute
				(
					"id",
					`starter-${i + 1}`
				);

			container.appendChild
				(starter);

			const h2 =
				document.createElement
					("h2");

			h2.textContent =
				starters[i].name;

			starter.appendChild(h2);

			const span =
				document.createElement
					("span");

			span.textContent =
				starters[i].price;

			starter.appendChild
				(span);

			const para =
				document.createElement
					("p");

			para.textContent =
				starters[i].description;

			starter.appendChild
				(para);

		} // for

	} // displayStarters()

	//=======================================================================================

	#displayEntrees() {

		const container =
			document.createElement
				("section");

		container.setAttribute
			(
				"id",
				"entrees"
			);

		this.#menu.appendChild
			(container);

		const h1 =
			document.createElement
				("h1");

		h1.textContent =
			"Entrees";

		container.appendChild
			(h1);

		const names =
			[
				"Pan Roasted Flounder",
				"Pan Seared Yellowfin",
				"Alpine Kreuter Butter"
			];

		const description1 =
			"Smoked bacon, grape tomatoes, local sweet potato, " +
			"sweet corn pudding, roasted chili butter flounder.";

		const description2 =
			"Crispy pork belly of Tuna, with golden beets, " +
			"celery root mash, local pickled perpper gastrique, " +
			"oregano, hose smoked sea salt.";

		const description3 =
			"Pan-fried in Herbs and Special Spices. " +
			"Mashed Potato, Vienna Salad, German Bread, " +
			"and Herb Butter.";

		const prices =
			[
				"$25.22",
				"$29.00",
				"$23.95"
			];

		const descriptions =
			[
				description1,
				description2,
				description3,
			];

		const entrees =
			[
				{
					name: names[0],
					price: prices[0],
					description: descriptions[0],
				},
				{
					name: names[1],
					price: prices[1],
					description: descriptions[1],
				},
				{
					name: names[2],
					price: prices[2],
					description: descriptions[2],
				}
			];

		const n =
			entrees.length;

		for (let i = 0; i < n; i++) {

			const entree =
				document.createElement
					("section");

			entree.setAttribute
				(
					"id",
					`entree-${i + 1}`
				);

			container.appendChild
				(entree);

			const h2 =
				document.createElement
					("h2");

			h2.textContent =
				entrees[i].name;

			entree.appendChild
				(h2);

			const span =
				document.createElement
					("span");

			span.textContent =
				entrees[i].price;

			entree.appendChild
				(span);

			const para =
				document.createElement
					("p");

			para.textContent =
				entrees[i].description;

			entree.appendChild
				(para);

		} // for

	} // displayEntrees()

	//=======================================================================================

	#displayLunches() {

		const container =
			document.createElement
				("section");

		container.setAttribute
			(
				"id",
				"lunch"
			);

		this.#menu.appendChild
			(container);

		const h1 =
			document.createElement
				("h1");

		h1.textContent =
			"Lunch Specials";

		container.appendChild
			(h1);

		const names =
			[
				"Mexican Bean",
				"Buffalo Bill Burger",
				"Arugula & Pear",
				"Grilled Chicken Panini"
			];

		const prices =
			[
				"$6.85",
				"$6.95",
				"$8.00",
				"$11.25"
			];

		const description1 =
			"Black bean puree and pepper jack cheese topped with " +
			"our homemade salsa, and sprinkled with fried garlic.";

		const description2 =
			"Classic American burger with your choice of American cheese, " +
			"lettuce, tomato, red onion, mustard, ketchup, pickles, or " +
			"mayo!";

		const description3 =
			"Gorgonzola cheese, sherry vinaigrette."

		const description4 =
			"Fresh mozzarella, roasted red peppers, " +
			"sliced tomatoes, mixed field greens, and " +
			"balsamic vinaigrette.";

		const descriptions =
			[
				description1,
				description2,
				description3,
				description4
			];

		const lunches =
			[
				{
					name: names[0],
					price: prices[0],
					description: descriptions[0],
				},
				{
					name: names[1],
					price: prices[1],
					description: descriptions[1],

				},
				{
					name: names[2],
					price: prices[2],
					description: descriptions[2]
				},
				{
					name: names[3],
					price: prices[3],
					description: descriptions[3]
				}
			];

		const n =
			lunches.length;

		for (let i = 0; i < n; i++) {

			const lunch =
				document.createElement
					("section");

			lunch.setAttribute
				(
					"id",
					`lunch-${i + 1}`
				);

			container.appendChild
				(lunch);

			const h2 =
				document.createElement
					("h2");

			h2.textContent =
				lunches[i].name;

			lunch.appendChild
				(h2);

			const span =
				document.createElement
					("span");

			span.textContent =
				lunches[i].price;

			lunch.appendChild
				(span);

			const para =
				document.createElement
					("p");

			para.textContent =
				lunches[i].description;

			lunch.appendChild
				(para);

		} // for

	} // displayLunches()

	//=======================================================================================

	#displayPizzas() {

		const container =
			document.createElement
				("section");

		container.setAttribute
			(
				"id",
				"pizzas"
			);

		this.#menu.appendChild
			(container);

		const h1 =
			document.createElement
				("h1");

		h1.textContent =
			"Pizza";

		container.appendChild
			(h1);

		const descriptions =
			[
				"Classic Pepperoni Pizza.",
				"Classic Cheese Pizza.",
				"Classic New York Pizza"
			];

		const prices =
			[
				"$16.95",
				"$16.50",
				"$30.25"
			];

		const names =
			[
				"Pepperoni Pizza",
				"Cheese Pizza",
				"New York Pizza"
			];

		const pizzas =
			[
				{
					name: names[0],
					price: prices[0],
					description: descriptions[0],
				},
				{
					name: names[1],
					price: prices[1],
					description: descriptions[1],

				},
				{
					name: names[2],
					price: prices[2],
					description: descriptions[2]
				},
				{
					name: names[3],
					price: prices[3],
					description: descriptions[3]
				}
			];

		const n =
			pizzas.length;

		for (let i = 0; i < n; i++) {

			const pizza =
				document.createElement
					("section");

			pizza.setAttribute
				(
					"id",
					`pizza-${i + 1}`
				);

			container.appendChild
				(pizza);

			const h2 =
				document.createElement
					("h2");

			h2.textContent =
				pizzas[i].name;

			pizza.appendChild
				(h2);

			const para1 =
				document.createElement
					("p");

			para1.setAttribute
				(
					"class",
					"description"
				);

			para1.textContent =
				pizzas[i].price;

			pizza.appendChild
				(para1);

			const para2 =
				document.createElement
					("p");

			para2.setAttribute
				(
					"class",
					"description"
				);

			para2.textContent =
				descriptions[i];

			pizza.appendChild
				(para2);

		} // for

	} // displayPizzas()

	//=======================================================================================

} // class

//=======================================================================================

const menu =
	new Menu();

menu.display();

export { menu };

