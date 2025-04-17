/* Accessibility */
import { clickLabelFunction, observeElements } from "./utils.js";

const selectApp = document.querySelectorAll(".faq__question");
const selectElements = document.querySelectorAll("section");

selectApp.forEach((item) => clickLabelFunction(item));
observeElements(selectElements);
