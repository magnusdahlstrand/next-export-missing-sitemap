This repository highlights an issue combining next-sitemap with next export when hosting on a static host.

[See the thread which prompted this repo](https://community.cloudflare.com/t/sitemap-not-available-through-cloudflare-pages/384330)

**This branch has had both solutions applied:**

A. Set the `outDir` configuration property in `sitemap.config.js` to `out`, which is where `next export` puts its content.

B. Rename `postbuild` to `generate-sitemap` and update the npm build command to `next build && npm run generate-sitemap && next export`.
