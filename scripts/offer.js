import fetchEvent from "./utils/fetchEvent";

fetchEvent("Pageview Página Meteórico");
document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", () => {
    fetchEvent("Quero Garantir essa Oportunidade");
  });
});
