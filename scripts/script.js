import BasicForm from "./modules/form";
import fetchEvent from "./utils/fetchEvent";

document.querySelectorAll("[data-form]").forEach((form) => {
  new BasicForm(form);
});

fetchEvent("Pageview E-book");
