const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const AE = require("./data.js");

const root = process.cwd();
const assetVersion = (file) => crypto
  .createHash("sha256")
  .update(fs.readFileSync(path.join(root, file)))
  .digest("hex")
  .slice(0, 10);
const styleVersion = assetVersion("styles.css");
const scriptVersion = assetVersion("assets/site.js");
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
<a class="skip-link" href="#main-content">Skip to main content</a>
<header class="site-header">
  <a class="brand" href="${from}" aria-label="Andaleeb Enterprises home"><img src="${asset("images/andaleeb-wordmark.png", from)}" width="1400" height="201" alt="Andaleeb"></a>
  <button class="menu-toggle" type="button" aria-label="Open navigation" aria-controls="primary-navigation" aria-expanded="false" data-menu-toggle><span></span><span></span><span></span></button>
  <nav class="main-nav" id="primary-navigation" aria-label="Primary navigation" data-nav>
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
  <div class="footer-bottom">
    <small>Copyright © 2026 Andaleeb Enterprises. All Rights Reserved.</small>
    <nav class="footer-legal" aria-label="Legal and accessibility">
      <a href="${from}privacy/">Privacy</a>
      <a href="${from}terms/">Terms</a>
      <a href="${from}accessibility/">Accessibility</a>
    </nav>
  </div>
</footer>
<button class="to-top" type="button" aria-label="Back to top" data-top>↑</button>
<script src="${from}assets/site.js?v=${scriptVersion}" defer></script>`;
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
  <link rel="stylesheet" href="${from}styles.css?v=${styleVersion}">
</head>
<body>
${nav(active, from)}
<main id="main-content" tabindex="-1">${body}</main>
${foot(from)}
</body>
</html>`;

const propertyCard = (p, from = "") => `
<article class="property-card" data-category="${p.commercialType || p.category}">
  <a href="${propUrl(p.slug, from)}">
    <img src="${photo(p.images[0], from)}" alt="${displayAddress(p)}" loading="lazy" width="640" height="460">
    <div class="property-card-body">
      <h2>${displayAddress(p)}</h2>
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
const newsCard = (n, from = "", headingLevel = 3) => {
  const href = n[5] || `${from}news/${n[0]}/`;
  const linkAttrs = n[5] ? ` target="_blank" rel="noopener noreferrer"` : "";
  return `
<article class="news-card">
  <img src="${photo(newsImage(n[0]), from)}" alt="${n[1]}" loading="lazy" width="640" height="420">
  <p class="date">${n[2]}</p>
  <p class="source">${n[3]}</p>
  <h${headingLevel}><a href="${href}"${linkAttrs}>${n[1]}</a></h${headingLevel}>
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
  body: `<section class="page-title"><h1>News</h1></section><section class="news-grid" aria-label="News articles">${AE.news.map(n => newsCard(n, "../", 2)).join("")}</section>`
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
  <h2 class="section-title">Featured Businesses</h2>
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
  body: `
<section class="page-title"><h1>Contact</h1></section>
<section class="contact-panel">
  <div>
    <p class="eyebrow">Lender and Partner Inquiries</p>
    <h2>Discuss the portfolio, project pipeline, or financing needs.</h2>
    <p>This website does not collect inquiry details through an online form. Contact the Andaleeb Enterprises team directly by email.</p>
  </div>
  <div class="contact-method">
    <p class="eyebrow">Email</p>
    <h3>Start a conversation</h3>
    <a class="solid-btn" href="mailto:${AE.company.email}">Email Andaleeb Enterprises</a>
    <p class="contact-note">Email is not a secure channel. Please do not send Social Security numbers, bank account details, passwords, or other sensitive personal or financial information.</p>
  </div>
</section>`
}));

write("privacy/index.html", layout({
  title: "Privacy Policy",
  active: "",
  from: "../",
  body: `
<article class="legal-page">
  <header class="legal-header">
    <p class="eyebrow">Legal</p>
    <h1>Privacy Policy</h1>
    <p class="legal-updated">Last updated August 20, 2026</p>
  </header>

  <p>This Privacy Policy explains how Andaleeb Enterprises handles information in connection with this website. The site is a public, informational website and does not currently provide user accounts, online payments, analytics, advertising trackers, or an active contact form.</p>

  <h2>Information you choose to provide</h2>
  <p>If you contact us by email, we may receive your name, email address, message, and any other information you choose to include. Please do not email Social Security numbers, bank account details, passwords, or other sensitive personal or financial information.</p>

  <h2>Information processed automatically</h2>
  <p>The website is hosted through GitHub Pages. As with most hosted websites, GitHub and the networks used to deliver the site may process technical information such as an Internet Protocol address, browser and device information, requested pages, dates and times, and security or server logs. That processing is governed by the service provider's own terms and privacy practices.</p>

  <h2>Cookies, analytics, and advertising</h2>
  <p>Andaleeb Enterprises does not currently use site analytics, advertising pixels, targeted advertising, or code that stores information in your browser through cookies or local storage. Third-party resources or websites reached from this site may use their own technologies and policies.</p>

  <h2>Third-party services and links</h2>
  <p>The site may request fonts from Google Fonts, display images delivered from third-party image hosts, and link to services such as Matterport, news publications, and other external websites. When you load or visit a third-party resource, that provider may receive technical information about the request. Andaleeb Enterprises does not control those providers' privacy or security practices.</p>

  <h2>How information is used and shared</h2>
  <p>We may use information you send to respond to you, evaluate a business inquiry, operate and protect the website, maintain business records, and comply with legal obligations. We do not sell personal information or use it for targeted advertising. Information may be shared with service providers that support our operations, professional advisers, counterparties involved in a transaction when appropriate, or government authorities when required by law.</p>

  <h2>Retention and security</h2>
  <p>We retain correspondence and related records only as long as reasonably needed for the purpose for which they were received, our legitimate business needs, and applicable legal obligations. We use reasonable safeguards, but no website, email system, or method of transmission can be guaranteed completely secure.</p>

  <h2>Your privacy choices and rights</h2>
  <p>You may ask us to review, correct, or delete personal information you have provided to us. Depending on where you live and whether a privacy law applies, you may have additional rights, including rights to access, correct, delete, or obtain a copy of certain personal data, and to appeal a denied request. Because the site does not currently sell personal data, use it for targeted advertising, or conduct profiling in furtherance of decisions producing legal or similarly significant effects, the site does not provide an opt-out control for those activities.</p>

  <h2>Children's privacy</h2>
  <p>This website is intended for a general business audience and is not directed to children under 13. We do not knowingly collect personal information from children through the website.</p>

  <h2>Changes to this policy</h2>
  <p>We may update this policy as the website, our practices, or applicable requirements change. The date at the top identifies the latest revision.</p>

  <h2>Contact us</h2>
  <p>For a privacy question or request, email <a href="mailto:${AE.company.email}">${AE.company.email}</a>. Please include enough information for us to understand and respond to your request, but do not include sensitive credentials or financial data.</p>
</article>`
}));

write("terms/index.html", layout({
  title: "Terms of Use",
  active: "",
  from: "../",
  body: `
<article class="legal-page">
  <header class="legal-header">
    <p class="eyebrow">Legal</p>
    <h1>Terms of Use</h1>
    <p class="legal-updated">Last updated August 20, 2026</p>
  </header>

  <p>These Terms of Use govern your access to the Andaleeb Enterprises website. By using the site, you agree to these terms. If you do not agree, please do not use the site.</p>

  <h2>Informational purpose only</h2>
  <p>The website provides general information about Andaleeb Enterprises and certain properties, projects, tenants, and news. Content is not an offer to sell or lease property or securities, a solicitation, a commitment to lend or invest, or legal, tax, investment, or financial advice. Any transaction is subject to separate due diligence and definitive written agreements.</p>

  <h2>Accuracy and availability</h2>
  <p>We seek to keep the site useful and current, but property descriptions, dimensions, values, occupancy, availability, photographs, links, and other content may be incomplete, estimated, or outdated. We do not promise that the site will always be available, error-free, or suitable for a particular purpose.</p>

  <h2>Permitted use</h2>
  <p>You may view and use the website for lawful informational and business purposes. You may not interfere with the site's operation or security, attempt unauthorized access, introduce malicious code, misrepresent your identity or affiliation, or use automated activity in a manner that unreasonably burdens the site or its hosting provider.</p>

  <h2>Ownership</h2>
  <p>Unless otherwise indicated, the website's design, text, graphics, branding, and original media are owned by or licensed to Andaleeb Enterprises and are protected by applicable intellectual property laws. These terms do not transfer any ownership rights or grant permission to use Andaleeb Enterprises names, marks, or media outside ordinary viewing of the site.</p>

  <h2>Third-party content and links</h2>
  <p>The site may contain links to news publications, virtual-tour providers, and other third parties. Those links are provided for convenience. We do not control or endorse, and are not responsible for, third-party content, availability, privacy, or security practices.</p>

  <h2>Disclaimers</h2>
  <p>To the fullest extent permitted by law, the site and its content are provided “as is” and “as available,” without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</p>

  <h2>Limitation of liability</h2>
  <p>To the fullest extent permitted by law, Andaleeb Enterprises and its owners, affiliates, employees, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, data, or opportunities, arising from or related to your use of or inability to use the site. Nothing in these terms limits liability that cannot lawfully be limited.</p>

  <h2>Governing law</h2>
  <p>These terms are governed by the laws of the State of Connecticut, without regard to conflict-of-laws principles. Any dispute will be subject to the courts having jurisdiction in Connecticut, except where applicable law requires otherwise.</p>

  <h2>Changes and contact</h2>
  <p>We may revise these terms from time to time by posting an updated version on this page. Questions may be sent to <a href="mailto:${AE.company.email}">${AE.company.email}</a>.</p>
</article>`
}));

write("accessibility/index.html", layout({
  title: "Accessibility Statement",
  active: "",
  from: "../",
  body: `
<article class="legal-page">
  <header class="legal-header">
    <p class="eyebrow">Accessibility</p>
    <h1>Accessibility Statement</h1>
    <p class="legal-updated">Last reviewed August 20, 2026</p>
  </header>

  <p>Andaleeb Enterprises wants people with disabilities to be able to access the information and services presented on this website. Accessibility is an ongoing effort, and we welcome feedback when something does not work as expected.</p>

  <h2>Our accessibility target</h2>
  <p>We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA where reasonably possible. This statement describes a target and ongoing work; it is not a claim that every page or third-party resource has been independently audited or fully conforms.</p>

  <h2>Accessibility features</h2>
  <ul>
    <li>A skip link and semantic page regions for faster keyboard and assistive-technology navigation.</li>
    <li>Keyboard-operable navigation, property filters, media controls, and galleries.</li>
    <li>Visible keyboard focus indicators and meaningful labels for interactive controls.</li>
    <li>Alternative text for informative images, with decorative images hidden from assistive technology.</li>
    <li>Responsive layouts that adapt to smaller screens and text enlargement.</li>
    <li>Reduced animation when a device or browser requests reduced motion.</li>
  </ul>

  <h2>Known limitations</h2>
  <p>Some linked third-party content, including external news articles and Matterport virtual tours, is controlled by other providers and may not offer the same level of accessibility as this website. Some historical property photography may also communicate visual details that are difficult to capture completely in brief alternative text. Contact us if you need the information in another form.</p>

  <h2>Feedback and alternative access</h2>
  <p>If you encounter an accessibility barrier or need content in an alternative format, email <a href="mailto:${AE.company.email}">${AE.company.email}</a>. Please identify the page, the problem, the assistive technology or browser you were using if relevant, and the format or accommodation you need. We will make reasonable efforts to respond and provide an accessible alternative.</p>

  <h2>Technical approach</h2>
  <p>The site uses standards-based HTML, CSS, and JavaScript and is designed to work with current versions of major browsers and common assistive technologies. Accessibility may vary with older software, browser extensions, or third-party content.</p>
</article>`
}));
