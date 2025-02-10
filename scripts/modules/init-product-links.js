import fetchEvent from "../utils/fetchEvent.js";

export default function initProductLinks() {
  const plans = document.querySelectorAll("[data-plan]");
  plans.forEach((plan) => {
    plan.addEventListener("click", (e) => {
      const planType = e.currentTarget.getAttribute("data-plan");
      const capitalizedPlanType =
        planType.charAt(0).toUpperCase() + planType.slice(1).toLowerCase();
      fetchEvent(`Clicou no Plano ${capitalizedPlanType}`);
    });
  });
}
