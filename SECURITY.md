# Website Security and Rate Limiting

This repository builds a static website hosted by GitHub Pages. It has no application server, database, user accounts, payment flow, or form-submission endpoint.

## Current abuse protection

- GitHub Pages applies platform-level rate limits and may return HTTP `429 Too Many Requests` when those limits are triggered.
- The website exposes no first-party API or form endpoint that accepts repeated requests.
- The contact page uses a direct email link and warns visitors not to send sensitive personal or financial information.
- No secrets or credentials should be committed to this repository or placed in client-side JavaScript.

GitHub does not provide repository owners with configurable per-IP rate-limit rules for a site served from a `github.io` address. A browser-side JavaScript timer would be trivial to bypass and is not a security control, so this project intentionally does not pretend to enforce one.

## If configurable limits become necessary

Place a custom domain in front of the site through a CDN or web application firewall that supports rate-limiting rules. Apply rules at that edge layer to the paths that need protection. If a form or API is added later, it must also enforce limits on the server side and should include input validation, body-size limits, bot protection, logging, and a privacy review.

Before enabling any future form endpoint, start with a conservative limit appropriate to the workflow, test legitimate use cases, and return `429` with a `Retry-After` header when the limit is exceeded.

References:

- [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [Cloudflare rate limiting rules](https://developers.cloudflare.com/waf/rate-limiting-rules/)

## Reporting a security issue

Do not open a public issue containing credentials, personal information, or exploit details. Contact Andaleeb Enterprises directly at the email shown on the website and provide only the minimum information needed to describe the problem.
