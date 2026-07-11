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

const detailHero = document.querySelector(".detail-hero > img");
document.querySelectorAll("[data-gallery-image]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!detailHero) return;
    detailHero.src = button.dataset.galleryImage;
    detailHero.alt = button.dataset.galleryAlt;
    document.querySelectorAll("[data-gallery-image]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
  });
});

const heroVideo = document.querySelector("[data-hero-video]");
const heroVideoToggle = document.querySelector("[data-hero-video-toggle]");
if (heroVideo) {
  heroVideo.addEventListener("ended", () => {
    heroVideo.closest(".home-hero")?.classList.add("video-finished");
    heroVideoToggle?.classList.add("is-paused");
    heroVideoToggle?.setAttribute("aria-label", "Replay hero video");
    heroVideoToggle?.setAttribute("aria-pressed", "true");
  });
}

if (heroVideo && heroVideoToggle) {
  heroVideoToggle.addEventListener("click", () => {
    if (heroVideo.ended) {
      heroVideo.currentTime = 0;
      heroVideo.closest(".home-hero")?.classList.remove("video-finished");
    }
    if (heroVideo.paused) {
      heroVideo.play();
      heroVideoToggle.classList.remove("is-paused");
      heroVideoToggle.setAttribute("aria-label", "Pause hero video");
      heroVideoToggle.setAttribute("aria-pressed", "false");
    } else {
      heroVideo.pause();
      heroVideoToggle.classList.add("is-paused");
      heroVideoToggle.setAttribute("aria-label", "Play hero video");
      heroVideoToggle.setAttribute("aria-pressed", "true");
    }
  });
}
