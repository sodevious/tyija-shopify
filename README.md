# Setup 

This theme uses Sanity.io to manage it's content, and the Shopify theme customizer for certain images and copy that changes infrequently.

The Shopify admin is the source of truth for product inventory levels, orders, customer information, and collections.

Page content and blogs, are managed via Sanity.

Performance features:
- Webpack generates an SVG sprite image from all SVGs inside `src/icons`. Used to power SVG icons on the site. This reduces network requests to 1 single request for all icons. This solution does not rely on Javascript.
- Tree-shaking by PostCSS so that only classes that are used are output. Smaller file sizes.
- Minimized CSS and JS bundles on deploy.
- Images make use of lazy loading where possible.

Other features:
- Custom Tailwind modifier for `light` theme.
- Custom Tailwind breakpoint for short screens.
- Vue enabled theme-wide but not mounted until used with `vue` on a parent element. This is to keep the theme majority liquid/server rendered without Javascript. 
- SVG icons use `currentColor` to make them themable.
- Predictive search
- `no-js` variant to hide any features that don't work without Javascript enabled.

## Local development

```
npm install
```

Run `npm run start` to launch a webpack build and shopify-cli server to run this theme locally. 

You may have to login via `shopify login --store=tyija`. The theme should be come available at http://127.0.0.1:9292

Helpful commands
- Start a local webpack and shopify server: `npm run start`
- Deploy to Shopify: `npm run deploy`
- Pull existing theme: `npm run shopify:pull`


### Sanity Studio 

To run the studio locally, in a new console window run `cd studio && sanity start`. It will become available at http://localhost:3333

To deploy sanity, use `sanity deploy` when inside the `studio` folder.

Sanity will send a webhook that creates a blog post in the Shopify admin.

### Tailwind 

In general, try to order classes from left to right respectively: Layout, Position, Sizing, Spacing, Typography, Color (and other presentational classes)