This repository highlights an issue combining next-sitemap with next export when hosting on a static host.

[See the thread which prompted this repo](https://community.cloudflare.com/t/sitemap-not-available-through-cloudflare-pages/384330)

**Working example in the [working branch](https://github.com/magnusdahlstrand/next-export-missing-sitemap/tree/working)**

**Setup**
next-sitemap@2.5.20, outputs its sitemap to the public directory.
I followed the [next documentation for export](https://nextjs.org/docs/advanced-features/static-html-export#next-export) and have set my npm build script to `next build && next export`.
and I followed the [next-sitemap documentation](https://www.npmjs.com/package/next-sitemap#building-sitemaps) instructing me to define a postbuild npm command to trigger the sitemap building.

**Problem**
The problem arises because the npm build command runs next export which would copy the sitemap into `out`, but the sitemap isn't there yet as it is only created "postbuild".

**Solution**
The solution is to set the outDir configuration property in sitemap.config.js to `out`, which is where `next export` puts its content.
Alternatively, but crucially not both, rename `postbuild` to `generate-sitemap` and update the npm build command to `next build && npm run generate-sitemap && next export`.

Why not both? If running `generate-sitemap` before export, the export command will clear the `out` directory which already contains the built sitemap. Therefore, use only one of the solutions.