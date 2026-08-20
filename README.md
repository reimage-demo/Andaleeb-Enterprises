# Andaleeb Enterprises Static Demo

This is a front-end only, lender-facing real estate website demo for Andaleeb Enterprises.

## Structure

- `index.html` is the home page.
- `about/`, `properties/`, `news/`, `case-studies/`, and `contact/` are clean URL sections.
- `properties/{property-slug}/` contains one page per asset.
- `data.js` is the single portfolio/news/case-study data source.
- `build-site.js` generates the static HTML pages from that data.
- `styles.css` and `assets/site.js` are shared across every page.
- `privacy/`, `terms/`, and `accessibility/` contain the public policy pages.
- `SECURITY.md` documents the hosting security and rate-limit boundary.

## Performance Approach

- Static HTML with no framework runtime.
- Shared CSS and a tiny deferred JavaScript file.
- Clean folder URLs, avoiding visible `index.html` paths.
- Images include explicit dimensions and lazy loading outside the first viewport.
- The first hero image uses `fetchpriority="high"`.
- Cards use stable aspect ratios to prevent layout shift.

## Updating The Portfolio

Edit `data.js`, then run:

```bash
node build-site.js
```

The generator will refresh all portfolio, news, and case-study pages.

Then run the automated site audit:

```bash
node scripts/audit-site.js
```

## Privacy, Accessibility, and Security

- The website does not use analytics, advertising trackers, accounts, payments, or a first-party form endpoint.
- The global footer links to the Privacy Policy, Terms of Use, and Accessibility Statement.
- The site targets WCAG 2.2 Level AA and includes keyboard navigation, a skip link, visible focus states, descriptive labels, and reduced-motion behavior.
- GitHub Pages provides platform-level rate limiting. GitHub does not expose custom per-IP rules for a `github.io` site; configurable rate limiting requires a custom domain behind a CDN or web application firewall. See `SECURITY.md` for the deployment boundary and requirements for any future API or form.
