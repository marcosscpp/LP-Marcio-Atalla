import FlipDown from "./modules/flip-down";

const timestamp = new Date('2025-02-13T09:00:00Z').getTime() / 1000;

const flipdown = new FlipDown(timestamp).start();

document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", () => {
    fetchEvent("Entrou no Grupo Whatsapp");
  });
});
