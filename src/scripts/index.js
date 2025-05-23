import "../styles/style.css";
import { greeting } from "./restaurant.js";
import televisionImage from "../assets/images/television.png";


console.log(greeting);


const image = document.createElement("img");
image.src = televisionImage;

document.body.appendChild(image);