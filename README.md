This repository highlights an issue combining next-sitemap with next export when hosting on a static host.

[See the thread which prompted this repo](https://community.cloudflare.com/t/sitemap-not-available-through-cloudflare-pages/384330)

**This branch has had the outDir solution applied**

Do not combine both solutions, as `next export` clears the `out` directory before running, removing the already provided sitemap files.