// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/private/var/www/peterdorsi.com/.cache/dev-404-page.js")),
  "component---src-pages-index-jsx": preferDefault(require("/private/var/www/peterdorsi.com/src/pages/index.jsx"))
}

