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

const topFilters = document.querySelectorAll("[data-filter]");
const propertyCards = document.querySelectorAll(".property-card");
if (topFilters.length) {
  topFilters.forEach((filter) => {
    filter.addEventListener("click", (event) => {
      event.preventDefault();
      const activeFilter = filter.dataset.filter;
      topFilters.forEach((item) => item.classList.remove("active"));
      filter.classList.add("active");
      propertyCards.forEach((card) => {
        card.hidden = activeFilter !== "all" && card.dataset.category !== activeFilter;
      });
    });
  });
}

const detailHero = document.querySelector(".detail-hero > img");
const galleryButtons = document.querySelectorAll("[data-gallery-image]");
galleryButtons[0]?.classList.add("active");
galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!detailHero) return;
    detailHero.src = button.dataset.galleryImage;
    detailHero.alt = button.dataset.galleryAlt;
    detailHero.closest(".detail-hero")?.classList.add("show-detail-image");
    galleryButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
  });
});

const splitReveal = document.querySelector(".about-panel");
if (splitReveal) splitReveal.classList.add("scroll-reveal", "split-reveal");

document.querySelectorAll(".section-title, .page-title, .filters, .tenant-band > .eyebrow, .tenant-band > h2, .tenant-logo-row, .section > .center, .news-band > .center").forEach((target) => {
  target.classList.add("scroll-reveal");
});

document.querySelectorAll(".feature-grid, .case-grid, .news-grid, .property-grid").forEach((grid) => {
  const columns = grid.classList.contains("property-grid") ? 4 : 3;
  Array.from(grid.children).forEach((target, index) => {
    target.classList.add("scroll-reveal");
    target.style.setProperty("--reveal-delay", `${(index % columns) * 0.09}s`);
  });
});

const revealTargets = document.querySelectorAll(".reveal, .scroll-reveal");
if (revealTargets.length) {
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealTargets.forEach((target) => revealObserver.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }
}

const attachScrollFocus = (elements, apply, maxDistRatio = 0.65) => {
  if (!elements.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let queued = false;
  const update = () => {
    const center = innerHeight / 2;
    const maxDist = innerHeight * maxDistRatio;
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - center);
      const focus = Math.max(0, 1 - dist / maxDist);
      apply(el, focus);
    });
    queued = false;
  };
  const queueUpdate = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener("scroll", queueUpdate, { passive: true });
  addEventListener("resize", queueUpdate);
  update();
};

attachScrollFocus(document.querySelectorAll(".focus-copy"), (el, focus) => {
  el.style.opacity = (0.45 + 0.55 * focus).toFixed(3);
});

const heroVideo = document.querySelector("[data-hero-video]");
const heroVideoToggle = document.querySelector("[data-hero-video-toggle]");
if (heroVideo && heroVideoToggle) {
  heroVideoToggle.addEventListener("click", () => {
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
