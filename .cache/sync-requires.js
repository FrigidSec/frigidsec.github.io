const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/saketupadhyay/CTFs/FrigidSec/FrigidSec.github.io/src/pages/404.js"))),
  "component---src-pages-cyberera-js": hot(preferDefault(require("/home/saketupadhyay/CTFs/FrigidSec/FrigidSec.github.io/src/pages/cyberera.js"))),
  "component---src-pages-ethics-js": hot(preferDefault(require("/home/saketupadhyay/CTFs/FrigidSec/FrigidSec.github.io/src/pages/ethics.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/saketupadhyay/CTFs/FrigidSec/FrigidSec.github.io/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/saketupadhyay/CTFs/FrigidSec/FrigidSec.github.io/src/pages/page-2.js")))
}

