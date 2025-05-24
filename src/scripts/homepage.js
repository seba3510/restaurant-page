import image1 from "../assets/images/left-bee.png";

//===============================================================================

import image2 from "../assets/images/right-bee.png";

//===============================================================================

class Homepage {


    #content =
        document.querySelector
            ("#content");

    //=====================================================================================================================================

    constructor() {

    } // constructor()

    //=====================================================================================================================================


    display() {

        this.#content.innerHTML = "";

        this.#appendHeader();

        this.#appendDescription();

    } // display()

    //=====================================================================================================================================

    #appendHeader() {

        const header =
            document.createElement
                ("header");

        const outerContainer =
            document.createElement
                ("section");

        outerContainer.setAttribute
            (
                "class",
                "outer-container"
            );

        header.appendChild
            (outerContainer);

        const innerContainer =
            document.createElement
                ("section");

        innerContainer.setAttribute
            (
                "class",
                "inner-container"
            );

        header.appendChild
            (innerContainer);

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

        innerContainer.appendChild
            (img1);

        const h1 =
            document.createElement
                ("h1");

        h1.textContent =
            "Beary's Breakfast Bar";

        innerContainer.appendChild
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

        innerContainer.appendChild
            (img2);

        outerContainer.appendChild
            (innerContainer);

        header.appendChild
            (outerContainer);

        this.#content.appendChild
            (header);

    } // appendHeader()

    //=====================================================================================================================================

    #appendDescription() {

        const container =
            document.createElement
                ("section");

        container.setAttribute
            (
                "id",
                "short-description"
            );

        const para1 =
            document.createElement
                ("p");

        const text =
            "Beary's has the best porridge! " +
            "The atmosphere and customer service make you " +
            "feel like you are sitting in the middle of the " +
            "woods, eating like a bear! This is exactly the kind " +
            "of place that I like to return again and again.";

        para1.textContent =
            text;

        container.appendChild
            (para1);

        const para2 =
            document.createElement
                ("p");

        para2.textContent =
            "Goldilocks";

        container.appendChild
            (para2);

        this.#content.appendChild
            (container);

    } // appendDescription()

    //=====================================================================================================================================

} // class

//=====================================================================================================================================


const homePage =
    new Homepage();

export { homePage };


//=====================================================================================================================================

