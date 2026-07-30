# Andaleeb Enterprises Static Demo

This is a front-end only, lender-facing real estate website demo for Andaleeb Enterprises.

## Structure

- `index.html` is the home page.
- `about/`, `properties/`, `news/`, `case-studies/`, and `contact/` are clean URL sections.
- `properties/{property-slug}/` contains one page per asset.
- `data.js` is the single portfolio/news/case-study data source.
- `build-site.js` generates the static HTML pages from that data.
- `styles.css` and `assets/site.js` are shared across every page.

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
