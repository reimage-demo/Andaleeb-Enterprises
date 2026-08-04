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

const revealTargets = document.querySelectorAll(".reveal");
if (revealTargets.length) {
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
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

attachScrollFocus(document.querySelectorAll(".tenant-logo"), (el, focus) => {
  el.style.opacity = (0.35 + 0.65 * focus).toFixed(3);
  el.style.filter = `grayscale(${(1 - focus).toFixed(3)})`;
});

attachScrollFocus(document.querySelectorAll(".focus-copy"), (el, focus) => {
  el.style.opacity = (0.45 + 0.55 * focus).toFixed(3);
});

const heroVideo = document.querySelector("[data-hero-video]");
const heroVideoToggle = document.querySelector("[data-hero-video-toggle]");
if (heroVideo) {
  heroVideo.addEventListener("ended", () => {
    heroVideo.closest(".home-hero")?.classList.add("video-finished");
    heroVideo.closest(".home-hero")?.querySelector(".hero-content")?.setAttribute("aria-hidden", "false");
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
      heroVideo.closest(".home-hero")?.querySelector(".hero-content")?.setAttribute("aria-hidden", "true");
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
