import fetchEvent from "./utils/fetchEvent.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import initProductLinks from "./modules/init-product-links.js";
import Faq from "./modules/faq.js";

fetchEvent("Pageview Qualidade de Vida");
const smoothScroll = new SmoothScroll("a[href^='#']").init();
initProductLinks();
const faq = new Faq("[data-faq] dt");
