const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const errors = [];

const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  if (entry.name === ".git" || entry.name === "node_modules") return [];
  const fullPath = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(fullPath) : [fullPath];
});

const htmlFiles = walk(root).filter((file) => file.endsWith(".html"));

const report = (file, message) => {
  errors.push(`${path.relative(root, file)}: ${message}`);
};

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");

  if (!/<html\s+lang="en"/.test(html)) report(file, "missing html lang=\"en\"");
  if (!/<title>[^<]+<\/title>/.test(html)) report(file, "missing a non-empty title");
  if (!/class="skip-link"\s+href="#main-content"/.test(html)) report(file, "missing skip link");
  if (!/<main\s+id="main-content"/.test(html)) report(file, "missing main-content landmark");
  if (/<form\b/i.test(html)) report(file, "contains a form but this static site has no approved form endpoint");

  for (const destination of ["privacy/", "terms/", "accessibility/"]) {
    if (!new RegExp(`href="[^"]*${destination}"`).test(html)) {
      report(file, `missing footer link to ${destination}`);
    }
  }

  const ids = Array.from(html.matchAll(/\sid="([^"]+)"/g), (match) => match[1]);
  for (const id of new Set(ids)) {
    if (ids.filter((candidate) => candidate === id).length > 1) report(file, `duplicate id \"${id}\"`);
  }

  const headingLevels = Array.from(html.matchAll(/<h([1-6])\b/gi), (match) => Number(match[1]));
  if (headingLevels[0] !== 1) report(file, "first heading is not an h1");
  headingLevels.forEach((level, index) => {
    if (index > 0 && level > headingLevels[index - 1] + 1) {
      report(file, `heading level jumps from h${headingLevels[index - 1]} to h${level}`);
    }
  });

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\salt="[^"]*"/i.test(match[1])) report(file, "image is missing an alt attribute");
  }

  for (const match of html.matchAll(/<button\b([^>]*)>/gi)) {
    if (!/\stype="button"/i.test(match[1])) report(file, "button is missing type=\"button\"");
  }

  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/gi)) {
    const original = match[1];
    if (!original || /^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(original)) continue;

    const clean = decodeURIComponent(original.split("#")[0].split("?")[0]);
    if (!clean) continue;
    const resolved = path.resolve(path.dirname(file), clean);
    const target = clean.endsWith("/") ? path.join(resolved, "index.html") : resolved;

    if (!target.startsWith(root + path.sep)) {
      report(file, `local reference escapes the site root: ${original}`);
    } else if (!fs.existsSync(target)) {
      report(file, `broken local reference: ${original}`);
    }
  }
}

for (const required of ["privacy/index.html", "terms/index.html", "accessibility/index.html", "SECURITY.md"]) {
  const file = path.join(root, required);
  if (!fs.existsSync(file)) errors.push(`${required}: required file was not generated`);
}

if (errors.length) {
  console.error(`Site audit failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Site audit passed for ${htmlFiles.length} HTML pages.`);
}
