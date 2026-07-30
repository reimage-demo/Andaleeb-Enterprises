# Andaleeb Enterprises Static Demo

Front-end only, lender-facing real estate website demo. See README.md for site structure and the `node build-site.js` content generation workflow.

## Publishing to GitHub

When the user says something like "update to github", "push this", or "publish this", run:

```bash
./publish.sh "optional commit message"
```

This stages all changes, commits, and pushes to the `origin` remote. If `origin` isn't configured yet, ask the user for the existing GitHub repo URL and run `git remote add origin <url>` first.
