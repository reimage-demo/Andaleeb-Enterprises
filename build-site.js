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
const squareFeet = (value) => `${value.toLocaleString()} sq ft`;
const asset = (file, from = "") => `${from}assets/${file}`;
const photo = (file, from = "") => /^https?:/.test(file) ? file : `${from}${file}`;
const propUrl = (slug, from = "") => `${from}properties/${slug}/`;
const cityOnly = (city) => city.replace(/,\s*CT$/, "");
const displayAddress = (p) => `${p.address}, ${cityOnly(p.city)}`;
const magnoliaImages = {
  completed: "assets/images/properties/magnolia-building/08.webp",
  aerial: "assets/images/properties/magnolia-building/exterior-aerial.jpg",
  front: "assets/images/properties/magnolia-building/exterior-front.jpg",
  comparison: "assets/images/magnolia-after-optimized.jpg"
};
const relatedImage = (property, seed = 0) => property.slug === "magnolia-building"
  ? [magnoliaImages.completed, magnoliaImages.aerial, magnoliaImages.front][seed % 3]
  : property.images[0];
const newsImage = (slug) => ({
  "albany-avenue-40-apartments": "assets/images/news/albany-avenue-40-apartments.jpg",
  "governors-building-acquisition": "assets/images/news/governors-building-acquisition.jpg",
  "albany-avenue-vacant-storefronts-zoning": "assets/images/news/albany-avenue-vacant-storefronts-zoning.jpg",
  "south-windsor-colony-complex-sale": "assets/images/news/south-windsor-colony-complex-sale-clean.webp",
  "amber-ace-andaleeb": "assets/images/news/690-albany-avenue.jpg",
  "courant-albany-avenue": "assets/images/news/696-714-albany-avenue.jpg"
})[slug] || AE.images.restoration;
const nav = (active, from = "") => `
<header class="site-header">
  <a class="brand" href="${from}" aria-label="Andaleeb Enterprises home"><img src="${asset("images/andaleeb-wordmark.png", from)}" width="1400" height="201" alt="Andaleeb"></a>
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
    <img src="${asset("images/andaleeb-mark.png", from)}" width="879" height="720" alt="Andaleeb Enterprises mark">
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
    <p>Hartford</p>
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
  <link rel="preload" href="${asset("images/andaleeb-wordmark.png", from)}" as="image">
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
<article class="property-card" data-category="${p.commercialType || p.category}">
  <a href="${propUrl(p.slug, from)}">
    <img src="${photo(p.images[0], from)}" alt="${displayAddress(p)}" loading="lazy" width="640" height="460">
    <div class="property-card-body">
      <h3>${displayAddress(p)}</h3>
      <small>${p.type} · ${p.status}</small>
      <span class="outline-btn">More Details</span>
    </div>
  </a>
</article>`;
const featureCard = (p, from = "", image = p.images[0]) => `
<article class="feature-card">
  <a href="${propUrl(p.slug, from)}">
    <img src="${photo(image, from)}" alt="${displayAddress(p)}" loading="lazy" width="760" height="520">
    <div><h3>${displayAddress(p)}</h3><p>${p.type}</p><span>More Details</span></div>
  </a>
</article>`;
const newsCard = (n, from = "") => {
  const href = n[5] || `${from}news/${n[0]}/`;
  const linkAttrs = n[5] ? ` target="_blank" rel="noopener noreferrer"` : "";
  return `
<article class="news-card">
  <img src="${photo(newsImage(n[0]), from)}" alt="${n[1]}" loading="lazy" width="640" height="420">
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
const tenantBand = (from = "") => `
<section class="tenant-band">
  <p class="eyebrow">Featured Tenants</p>
  <h2>Backed by the businesses that keep these blocks moving.</h2>
  <div class="tenant-logo-row">${AE.tenants.map(t => `<div class="tenant-logo${t.dark ? " dark" : ""}${t.logo ? "" : " text-only"}">${t.logo ? `<img src="${photo(`assets/images/tenants/${t.logo}`, from)}" alt="${t.name}" loading="lazy">` : `<span>${t.name}</span>`}</div>`).join("")}</div>
</section>`;

write("index.html", layout({
  title: "Real Estate Revitalization",
  active: "",
  body: `
<section class="home-hero">
  <img class="hero-still" src="assets/images/drone-hero-poster.webp" alt="Aerial drone view of the Andaleeb Enterprises portfolio in Hartford" width="1280" height="720">
  <video autoplay muted loop playsinline preload="auto" poster="assets/images/drone-hero-poster.webp" aria-label="Aerial drone footage traveling toward downtown Hartford" data-hero-video>
    <source src="assets/video/andaleeb-main.m4v" type="video/mp4">
  </video>
  <button class="hero-video-toggle" type="button" aria-label="Pause hero video" aria-pressed="false" data-hero-video-toggle>
    <span class="pause-icon" aria-hidden="true"></span>
    <span class="play-icon" aria-hidden="true"></span>
  </button>
  <div class="hero-content">
    <h1 class="hero-logo"><img src="${asset("images/andaleeb-mark.png", "")}" width="879" height="720" alt="Andaleeb Enterprises"></h1>
    <p>Real Estate Holding Company</p>
  </div>
</section>
${homeStats}
<section class="about-panel">
  <div class="section-media before-after-media">
    <figure><img src="assets/images/magnolia-before-optimized.jpg" alt="Magnolia Building before renovation" loading="lazy" width="1000" height="750"><figcaption>Before</figcaption></figure>
    <figure><img src="${magnoliaImages.comparison}" alt="Magnolia Building after renovation" loading="lazy" width="1000" height="750"><figcaption>After</figcaption></figure>
  </div>
  <div class="section-copy">
    <p class="eyebrow">Revitalization Model</p>
    <h2>Taking distressed properties from vacancy to value.</h2>
    <p>Andaleeb Enterprises revitalizes neighborhoods by investing in properties that have been neglected or overlooked. We acquire distressed buildings, restore them with purpose, and return them to productive use as quality, affordable housing and commercial space.</p>
    <p>Our approach prioritizes long-term stability over short-term returns. We work to keep rents accessible for residents and small businesses while creating safe, well-maintained properties that strengthen the surrounding community.</p>
    <p>We believe meaningful neighborhood revitalization happens one property at a time: restoring buildings, supporting tenants, reopening storefronts, and helping once-struggling corridors become active, vibrant places to live and do business.</p>
    <a class="solid-btn" href="about/">About the Company</a>
  </div>
</section>
<section class="section">
  <h2 class="section-title">Featured Properties</h2>
  <div class="feature-grid">${["post-office-building", "ten-mill-pond-lane", "magnolia-building"].map(slug => AE.properties.find(p => p.slug === slug)).map(p => featureCard(p, "", p.slug === "ten-mill-pond-lane" ? "assets/images/home/10-mill-pond-lane.jpg" : p.slug === "magnolia-building" ? magnoliaImages.front : p.images[0])).join("")}</div>
  <p class="center"><a class="outline-btn wide" href="properties/">All Properties</a></p>
</section>
<section class="case-band">
  <h2 class="section-title">Case Studies</h2>
  <div class="case-grid">${AE.caseStudies.map(c => { const p = AE.properties.find(property => property.slug === c[0]); return `<article><a class="case-image" href="properties/${c[0]}/"><img src="${photo(c[0] === "magnolia-building" ? magnoliaImages.completed : p.images[0])}" alt="${displayAddress(p)}" loading="lazy" width="760" height="520"></a><div><p class="status">Revitalized</p><h3>${displayAddress(p)}</h3><p>${c[2]}</p><a href="properties/${c[0]}/">View Property</a></div></article>`; }).join("")}</div>
</section>
${tenantBand()}
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
<section class="filters" aria-label="Property filters" data-filters>
  <a href="#all" data-filter="all" class="active">All</a><a href="#retail" data-filter="retail">Retail</a><a href="#office" data-filter="office">Office</a><a href="#mixed-use" data-filter="mixed">Mixed Use</a><a href="#residential" data-filter="residential">Residential</a>
</section>
<section class="property-grid" id="all">${AE.properties.map(p => propertyCard(p, "../")).join("")}</section>`
}));

AE.properties.forEach((p, i) => {
  const recs = AE.properties.filter(x => x.slug !== p.slug && (x.type === p.type || x.city === p.city)).slice(0, 3);
  write(`properties/${p.slug}/index.html`, layout({
    title: displayAddress(p),
    active: "Properties",
    from: "../../",
    body: `
<section class="detail-hero">
  <img src="${photo(p.images[0], "../../")}" alt="${displayAddress(p)}" width="1800" height="980" fetchpriority="high">
  ${p.heroVideo ? `<video autoplay muted loop playsinline preload="metadata" poster="../../assets/images/drone-hero-poster.webp" aria-label="Drone footage of the South Windsor plaza"><source src="${photo(p.heroVideo, "../../")}" type="video/mp4"></video>` : ""}
</section>
<section class="detail-heading"><p class="eyebrow">Property</p><h1>${displayAddress(p)}</h1><p>${p.type}</p></section>
<section class="thumb-row" aria-label="${displayAddress(p)} media gallery">${p.images.map((img, index) => `<button type="button" data-gallery-image="${photo(img, "../../")}" data-gallery-alt="${p.captions[index] || displayAddress(p)}" aria-label="View ${p.stages[index] || `photo ${index + 1}`}"><img src="${photo(img, "../../")}" alt="" loading="lazy" width="180" height="120"><span>${p.stages[index] || `View ${index + 1}`}</span></button>`).join("")}${p.tours.length ? `<a class="tour-thumb" href="${p.tours[0].url}" target="_blank" rel="noopener noreferrer" aria-label="Open 360 degree Matterport tour for ${displayAddress(p)}"><span class="tour-thumb-visual">360°</span><span>Virtual Tour</span></a>` : ""}</section>
<section class="detail-actions"><a class="outline-btn" href="../${AE.properties[Math.max(0, i - 1)].slug}/">Prev</a><a class="outline-btn wide" href="../">All Properties</a><a class="outline-btn" href="../${AE.properties[Math.min(AE.properties.length - 1, i + 1)].slug}/">Next</a></section>
<section class="detail-body">
  <aside>
    <p class="eyebrow">Property Type</p><p>${p.type}</p>
    <p class="eyebrow">Units / SF</p><p>${p.units}</p>
    ${p.siteAcres != null ? `<p class="eyebrow">Acreage</p><p>${p.siteAcres} acres</p>` : ""}
    ${p.grossSqFt != null ? `<p class="eyebrow">Square Feet</p><p>${squareFeet(p.grossSqFt)}</p>` : ""}
    <p class="eyebrow">Market Value</p><p>${money(p.value)}</p>
    <p class="eyebrow">Ownership</p><p>${p.owned}</p>
    <p class="eyebrow">Status</p><p>${p.status}</p>
  </aside>
  <article>
    <h2>Revitalization Story</h2>
    ${(p.story.length ? p.story : [`${displayAddress(p)} represents Andaleeb's disciplined approach to neighborhood real estate: acquire overlooked buildings, repair the physical condition, improve operations, and make the property useful again for tenants and lenders.`, `At ${p.address}, the company is focused on durable improvements that protect the asset, support affordable occupancy, and strengthen the surrounding commercial corridor.`]).map(text => `<p>${text}</p>`).join("")}
  </article>
</section>
${p.stages.length ? `<section class="story-strip"><p class="eyebrow">Photo Story</p><div>${p.images.map((img, index) => `<figure><img src="${photo(img, "../../")}" alt="${p.captions[index]}" loading="lazy" width="900" height="600"><figcaption><span>${p.stages[index]}</span>${p.captions[index]}</figcaption></figure>`).join("")}</div></section>` : ""}
<section class="amenity-band reveal">
  <h2>Impact Areas</h2>
  <div><span>Safer Buildings</span><span>Affordable Rents</span><span>Local Tax Base</span><span>Street Activity</span></div>
</section>
<section class="section">
  <h2 class="section-title">Similar Properties</h2>
  <div class="feature-grid">${recs.map((r, recIndex) => featureCard(r, "../../", relatedImage(r, i + recIndex))).join("")}</div>
</section>`
  }));
});

write("about/index.html", layout({
  title: "About",
  active: "About",
  from: "../",
  body: `
<section class="page-title"><h1>About</h1></section>
<section class="image-banner albany-collage" aria-label="Andaleeb Enterprises buildings along Albany Avenue">
  <figure class="albany-collage-main">
    <img src="${photo("assets/images/properties/restaurant-building/04.webp", "../")}" alt="Renovated storefront at 1113-1115 Albany Avenue" loading="lazy" width="1800" height="1350">
    <figcaption>1113–1115 Albany Avenue</figcaption>
  </figure>
  <figure class="albany-collage-wide albany-collage-magnolia">
    <img src="${photo(magnoliaImages.aerial, "../")}" alt="Aerial photograph of the Magnolia Building at 635-651 Albany Avenue" loading="lazy" width="2048" height="1534">
    <figcaption>635–651 Albany Avenue</figcaption>
  </figure>
  <figure>
    <img src="${photo("assets/images/properties/weaver-building/01.webp", "../")}" alt="Weaver Building at 1154-1170 Albany Avenue" loading="lazy" width="1800" height="810">
    <figcaption>1154–1170 Albany Avenue</figcaption>
  </figure>
  <figure>
    <img src="${photo("assets/images/properties/uptown-building/01.webp", "../")}" alt="Uptown Building at 1468-1470 Albany Avenue" loading="lazy" width="1800" height="1350">
    <figcaption>1468–1470 Albany Avenue</figcaption>
  </figure>
</section>
<section class="ownership-block">
  <h2>A Hands-On Approach to Ownership</h2>
  <div class="ownership-copy">
    <p>Andaleeb Enterprises is a real estate holding and investment company focused on acquiring, improving, and operating properties with long-term potential. We create value by restoring distressed and underutilized buildings, modernizing essential systems, improving residential and commercial spaces, and bringing vacant properties back into productive use.</p>
    <p>Our approach balances property improvement with affordability. We work to provide safe, well-maintained housing and commercial spaces at accessible rents, helping residents and local businesses remain part of the communities they call home.</p>
    <p>Andaleeb remains actively involved long after acquisition, overseeing improvements, maintaining properties, and working closely with tenants to support stable occupancy. The result is a stronger portfolio that creates lasting value for tenants, neighborhoods, municipalities, and our long-term investment partners.</p>
  </div>
</section>
${homeStats}
<section class="strategy-grid">
  ${["Acquisition", "Stabilization", "Tenant Affordability", "Municipal Value"].map((h, idx) => `<article><h3>${h}</h3><p>${["Identify buildings with strong locations and fixable distress.", "Address maintenance, safety, exterior presence, and operating reliability.", "Create usable space at rents that small businesses and residents can sustain.", "Reactivate tax base, storefronts, housing supply, and neighborhood confidence."][idx]}</p></article>`).join("")}
</section>
${tenantBand("../")}`
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
<section class="image-banner women-banner"><img src="../assets/images/women-empowered-hero.png" alt="A diverse group of women business leaders standing together" width="1536" height="1024" fetchpriority="high"></section>
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
