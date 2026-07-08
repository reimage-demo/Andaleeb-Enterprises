const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
  });
}

const topButton = document.querySelector("[data-top]");
if (topButton) {
  topButton.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  addEventListener("scroll", () => topButton.classList.toggle("visible", scrollY > 700), { passive: true });
}

document.querySelectorAll(".filters a").forEach((filter) => {
  filter.addEventListener("click", (event) => {
    event.preventDefault();
    const term = filter.textContent.toLowerCase();
    document.querySelectorAll(".property-card").forEach((card) => {
      const text = card.textContent.toLowerCase();
      const show = term === "all" || text.includes(term.replace("mixed use", "multi use")) || text.includes(term);
      card.hidden = !show;
    });
    document.querySelectorAll(".filters a").forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
  });
});
