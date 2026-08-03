const fs = require("fs");
const path = require("path");
const AE = require("./data.js");

const root = process.cwd();
const mkdir = (dir) => fs.mkdirSync(path.join(root, dir), { recursive: true });
const write = (file, html) => {
  mkdir(path.dirname(file));
  fs.writeFileSync(path.join(root, file), html);
};
const money = (value) => value ? `$${value.toLocaleString()}` : "Pending";
const asset = (file, from = "") => `${from}assets/${file}`;
const photo = (file, from = "") => /^https?:/.test(file) ? file : `${from}${file}`;
const propUrl = (slug, from = "") => `${from}properties/${slug}/`;
const newsImage = (slug) => ({
  "albany-avenue-40-apartments": "assets/images/properties/magnolia-building/02.webp",
  "governors-building-acquisition": "assets/images/properties/governors-building/01.webp",
  "albany-avenue-vacant-storefronts-zoning": "assets/images/properties/restaurant-building/03.webp"
})[slug] || AE.images.restoration;
const nav = (active, from = "") => `
<header class="site-header">
  <a class="brand" href="${from}" aria-label="Andaleeb Enterprises home"><img src="${asset("images/andaleeb-logo.webp", from)}" width="248" height="100" alt="Andaleeb Enterprises"></a>
  <button class="menu-toggle" type="button" aria-label="Open navigation" data-menu-toggle><span></span><span></span><span></span></button>
  <nav class="main-nav" data-nav>
    ${[
      ["About", "about/"],
      ["Properties", "properties/"],
      ["News", "news/"],
      ["Women Empowered", "women-empowered/"],
      ["Contact", "contact/"]
    ].map(([label, url]) => `<a class="${active === label ? "active" : ""}" href="${from}${url}">${label}</a>`).join("")}
  </nav>
</header>`;
const foot = (from = "") => `
<footer class="site-footer">
  <div class="footer-brand">
    <img src="${asset("images/andaleeb-logo.webp", from)}" width="220" height="89" alt="Andaleeb Enterprises">
    <p>Revitalizing legacy buildings into vibrant residential and commercial spaces.</p>
  </div>
  <div class="footer-links">
    <p class="eyebrow">Explore</p>
    <a href="${from}about/">About</a>
    <a href="${from}properties/">Properties</a>
    <a href="${from}news/">News</a>
  </div>
  <div class="footer-contact">
    <p class="eyebrow">Connect</p>
    <a href="mailto:${AE.company.email}">${AE.company.email}</a>
    <p>Hartford, CT</p>
  </div>
  <small class="footer-bottom">Copyright © 2026 Andaleeb Enterprises. All Rights Reserved.</small>
</footer>
<button class="to-top" type="button" aria-label="Back to top" data-top>↑</button>
<script src="${from}assets/site.js" defer></script>`;
const layout = ({ title, active, body, from = "" }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | Andaleeb Enterprises</title>
  <meta name="description" content="Andaleeb Enterprises revitalizes commercial and residential properties across Connecticut with lender-ready reporting and community-first execution.">
  <link rel="preload" href="${asset("images/andaleeb-logo.webp", from)}" as="image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap">
  <link rel="stylesheet" href="${from}styles.css">
</head>
<body>
${nav(active, from)}
<main>${body}</main>
${foot(from)}
</body>
</html>`;

const propertyCard = (p, from = "") => `
<article class="property-card">
  <a href="${propUrl(p.slug, from)}">
    <img src="${photo(p.images[0], from)}" alt="${p.name}" loading="lazy" width="640" height="460">
    <div class="property-card-body">
      <h3>${p.name}</h3>
      <p>${p.city}</p>
      <small>${p.type} · ${p.status}</small>
      <span class="outline-btn">More Details</span>
    </div>
  </a>
</article>`;
const overlayCard = (p, from = "") => `
<article class="feature-card">
  <a href="${propUrl(p.slug, from)}">
    <img src="${photo(p.images[0], from)}" alt="${p.name}" loading="lazy" width="760" height="520">
    <div><h3>${p.name}</h3><p>${p.city}</p><span>More Details</span></div>
  </a>
</article>`;
const newsCard = (n, from = "") => {
  const href = n[5] || `${from}news/${n[0]}/`;
  const linkAttrs = n[5] ? ` target="_blank" rel="noopener noreferrer"` : "";
  return `
<article class="news-card">
  <img src="${photo(newsImage(n[0]), from)}" alt="" loading="lazy" width="640" height="420">
  <p class="date">${n[2]}</p>
  <p class="source">${n[3]}</p>
  <h3><a href="${href}"${linkAttrs}>${n[1]}</a></h3>
  <p>${n[4]}</p>
  <a class="outline-btn" href="${href}"${linkAttrs}>${n[5] ? "Read Article" : "Read More"}</a>
</article>`;
};
const homeStats = `
<section class="stats-band reveal">
  <div><strong>${AE.company.totalAssets}</strong><span>Properties</span></div>
  <div><strong>${AE.company.totalUnits.toLocaleString()}+</strong><span>Units / Commercial Spaces</span></div>
  <div><strong>N/A</strong><span>Total Square Footage</span></div>
  <div><strong>N/A</strong><span>Total Property Acreage</span></div>
</section>`;

write("index.html", layout({
  title: "Real Estate Revitalization",
  active: "",
  body: `
<section class="home-hero">
  <img class="hero-still" src="assets/images/drone-hero-poster.webp" alt="Aerial drone view of the Andaleeb Enterprises portfolio in Hartford" width="1280" height="720">
  <video autoplay muted playsinline preload="auto" poster="assets/images/drone-hero-poster.webp" aria-label="Aerial drone footage over Hartford, ending on the Andaleeb Enterprises wordmark" data-hero-video>
    <source src="assets/video/andaleeb-drone-hero.mp4" type="video/mp4">
  </video>
  <button class="hero-video-toggle" type="button" aria-label="Pause hero video" aria-pressed="false" data-hero-video-toggle>
    <span class="pause-icon" aria-hidden="true"></span>
    <span class="play-icon" aria-hidden="true"></span>
  </button>
  <div class="hero-content">
    <h1>Andaleeb Enterprises</h1>
    <p>Revitalizing legacy buildings into vibrant residential and commercial spaces.</p>
  </div>
</section>
${homeStats}
<section class="about-panel">
  <div class="section-media"><img src="${photo(AE.properties.find(p => p.slug === "uptown-building").images[2])}" alt="Selective demolition inside the Uptown Building" loading="lazy" width="1200" height="900"></div>
  <div class="section-copy">
    <p class="eyebrow">Revitalization Model</p>
    <h2>Taking distressed properties from vacancy to value.</h2>
    <p>Andaleeb Enterprises revitalizes neighborhoods by taking on the buildings other owners walk away from. We buy distressed properties, fix what's broken, and bring them back into daily use as affordable housing and working commercial space. Rents stay within reach for the tenants and small businesses already rooted in these communities. The goal isn't a quick resale. It's a building that's safe, occupied, and contributing to a block that's coming back to life. That's how a struggling corridor turns into a vibrant one: one property, one tenant, one repaired storefront at a time.</p>
    <a class="solid-btn" href="about/">About the Company</a>
  </div>
</section>
<section class="section">
  <h2 class="section-title">Featured Properties</h2>
  <div class="feature-grid">${AE.properties.filter(p => p.featured).slice(0, 3).map(p => overlayCard(p)).join("")}</div>
  <p class="center"><a class="outline-btn wide" href="properties/">All Properties</a></p>
</section>
<section class="case-band">
  <h2 class="section-title">Case Studies</h2>
  <div class="case-grid">${AE.caseStudies.map(c => `<article><p class="status">Revitalized</p><h3>${c[1]}</h3><p>${c[2]}</p><a href="properties/${c[0]}/">View Property</a></article>`).join("")}</div>
</section>
<section class="news-band">
  <h2 class="section-title">Latest News</h2>
  <div class="news-grid compact">${AE.news.slice(0, 3).map(n => newsCard(n)).join("")}</div>
  <p class="center"><a class="outline-btn wide" href="news/">All News</a></p>
</section>`
}));

write("properties/index.html", layout({
  title: "Properties",
  active: "Properties",
  from: "../",
  body: `
<section class="page-title"><h1>Properties</h1></section>
<section class="filters" aria-label="Property filters">
  <a href="#commercial">Commercial</a><a href="#residential">Residential</a><a href="#mixed-use">Mixed Use</a>
</section>
<section class="property-grid" id="all">${AE.properties.map(p => propertyCard(p, "../")).join("")}</section>`
}));

AE.properties.forEach((p, i) => {
  const recs = AE.properties.filter(x => x.slug !== p.slug && (x.type === p.type || x.city === p.city)).slice(0, 3);
  write(`properties/${p.slug}/index.html`, layout({
    title: p.name,
    active: "Properties",
    from: "../../",
    body: `
<section class="detail-hero">
  <img src="${photo(p.images[0], "../../")}" alt="${p.name}" width="1800" height="980" fetchpriority="high">
  <div><h1>${p.name}</h1><p>${p.city}</p></div>
</section>
<section class="thumb-row" aria-label="${p.name} photo story">${p.images.map((img, index) => `<button type="button" data-gallery-image="${photo(img, "../../")}" data-gallery-alt="${p.captions[index] || p.name}" aria-label="View ${p.stages[index] || `photo ${index + 1}`}"><img src="${photo(img, "../../")}" alt="" loading="lazy" width="180" height="120"><span>${p.stages[index] || `View ${index + 1}`}</span></button>`).join("")}</section>
<section class="detail-actions"><a class="outline-btn" href="../${AE.properties[Math.max(0, i - 1)].slug}/">Prev</a><a class="outline-btn wide" href="../">All Properties</a><a class="outline-btn" href="../${AE.properties[Math.min(AE.properties.length - 1, i + 1)].slug}/">Next</a></section>
<section class="detail-body">
  <aside>
    <p class="eyebrow">Property Type</p><p>${p.type}</p>
    <p class="eyebrow">Units / SF</p><p>${p.units}</p>
    <p class="eyebrow">Market Value</p><p>${money(p.value)}</p>
    <p class="eyebrow">Ownership</p><p>${p.owned}</p>
    <p class="eyebrow">Status</p><p>${p.status}</p>
  </aside>
  <article>
    <h2>Revitalization Story</h2>
    ${(p.story.length ? p.story : [`${p.name} represents Andaleeb's disciplined approach to neighborhood real estate: acquire overlooked buildings, repair the physical condition, improve operations, and make the property useful again for tenants and lenders.`, `At ${p.address}, the company is focused on durable improvements that protect the asset, support affordable occupancy, and strengthen the surrounding commercial corridor.`]).map(text => `<p>${text}</p>`).join("")}
  </article>
</section>
${p.stages.length ? `<section class="story-strip"><p class="eyebrow">Photo Story</p><div>${p.images.map((img, index) => `<figure><img src="${photo(img, "../../")}" alt="${p.captions[index]}" loading="lazy" width="900" height="600"><figcaption><span>${p.stages[index]}</span>${p.captions[index]}</figcaption></figure>`).join("")}</div></section>` : ""}
<section class="amenity-band reveal">
  <h2>Impact Areas</h2>
  <div><span>Safer Buildings</span><span>Affordable Rents</span><span>Local Tax Base</span><span>Street Activity</span></div>
</section>
<section class="section">
  <h2 class="section-title">Similar Properties</h2>
  <div class="feature-grid">${recs.map(r => overlayCard(r, "../../")).join("")}</div>
</section>`
  }));
});

write("about/index.html", layout({
  title: "About",
  active: "About",
  from: "../",
  body: `
<section class="page-title"><h1>About</h1></section>
<section class="image-banner"><img src="${photo("assets/images/properties/magnolia-building/01.webp", "../")}" alt="635-651 Albany Avenue, one of Andaleeb's renovated mixed-use buildings in Hartford" loading="lazy" width="1800" height="760"></section>
<section class="two-col text-heavy">
  <div><p>Andaleeb Enterprises is a real estate holding company. It primarily grows the value of the properties it owns by renovating buildings that have fallen into disrepair, upgrading their systems and storefronts, and filling long-standing vacancies with tenants who serve the neighborhoods around them.</p></div>
  <div><h2>A hands-on approach to ownership.</h2><p>Rather than holding buildings at a distance, Andaleeb stays involved after acquisition: repairing what's broken, modernizing what's outdated, and working directly with tenants to keep space occupied. The result is a portfolio of properties that function well for the people who live and work in them, and for the lenders and municipalities that rely on them.</p></div>
</section>
${homeStats}
<section class="strategy-grid">
  ${["Acquisition", "Stabilization", "Tenant Affordability", "Municipal Value"].map((h, idx) => `<article><h3>${h}</h3><p>${["Identify buildings with strong locations and fixable distress.", "Address maintenance, safety, exterior presence, and operating reliability.", "Create usable space at rents that small businesses and residents can sustain.", "Reactivate tax base, storefronts, housing supply, and neighborhood confidence."][idx]}</p></article>`).join("")}
</section>
<section class="tenant-band">
  <p class="eyebrow">Current Tenants</p>
  <h2>Backed by the businesses that keep these blocks moving.</h2>
  <div class="tenant-logo-row">${AE.tenants.map(t => `<div class="tenant-logo${t.dark ? " dark" : ""}${t.logo ? "" : " text-only"}">${t.logo ? `<img src="${photo(`assets/images/tenants/${t.logo}`, "../")}" alt="${t.name}" loading="lazy">` : `<span>${t.name}</span>`}</div>`).join("")}</div>
</section>`
}));

write("news/index.html", layout({
  title: "News",
  active: "News",
  from: "../",
  body: `<section class="page-title"><h1>News</h1></section><section class="news-grid">${AE.news.map(n => newsCard(n, "../")).join("")}</section>`
}));
AE.news.filter(n => !n[5]).forEach(n => write(`news/${n[0]}/index.html`, layout({
  title: n[1],
  active: "News",
  from: "../../",
  body: `<article class="article-page"><p class="date">${n[2]}</p><p class="source">${n[3]}</p><h1>${n[1]}</h1><img src="${photo(newsImage(n[0]), "../../")}" alt="" width="1400" height="720"><p>${n[4]}</p><p>This project update reflects Andaleeb's focus on durable building improvements, active neighborhood space, and long-term stewardship across the Connecticut portfolio.</p><a class="outline-btn" href="../">All News</a></article>`
})));

write("women-empowered/index.html", layout({
  title: "Women Empowered Tenants",
  active: "Women Empowered",
  from: "../",
  body: `
<section class="page-title"><h1>Women Empowered Tenants</h1></section>
<section class="image-banner"><div class="image-placeholder" role="img" aria-label="Photo coming soon"></div></section>
<section class="two-col text-heavy">
  <div><p>Across the Andaleeb portfolio, women run businesses that give Hartford-area neighborhoods their daily rhythm: retail, food, healthcare, and community services rooted in the buildings they call home.</p></div>
</section>
<section class="section">
  <div class="tenant-grid">${AE.womenEmpowered.map(t => `
    <article class="tenant-card">
      <h3>${t.name}</h3>
      <p class="eyebrow">${t.business}</p>
      <p>${t.description}</p>
      ${t.slug ? `<a class="outline-btn" href="../properties/${t.slug}/">View Property</a>` : ""}
    </article>`).join("")}</div>
</section>`
}));

write("contact/index.html", layout({
  title: "Contact",
  active: "Contact",
  from: "../",
  body: `<section class="page-title"><h1>Contact</h1></section><section class="contact-panel"><div><p class="eyebrow">Lender and Partner Inquiries</p><h2>Discuss the portfolio, project pipeline, or financing needs.</h2><p>Use this front-end form as a placeholder for a future CRM, email provider, or secure document request workflow.</p></div><form><label>Name<input name="name" autocomplete="name"></label><label>Email<input type="email" name="email" autocomplete="email"></label><label>Message<textarea name="message" rows="5"></textarea></label><button class="solid-btn" type="submit">Send Inquiry</button></form></section>`
}));
