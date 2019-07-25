An opinionated advanced Gatsby template that provides a modular structure for designing pages, post and non blog-only site, with consideration for designing
large business webpages or landing pages with content aggregation. A Fork of V***** Advanced Gatsby Starter


- [ ] Transform console [prod] gatsby-plugin-remove-console https://github.com/abdullahceylan/gatsby-plugin-remove-console/blob/master/src/gatsby-node.js ## POSSIBLY WRITE THE IMPLEMENTATION MYSELF
- [ ] react offcanvas
- [ ] Implement Segment for Analytics and dump GA in package.json


### Packages to be removed (candidates)
- [ ]	"react-share": "^2.4.0",
- [ ]	"react-twitter-widgets": "^1.7.1",
- [ ]	"lodash": "^4.17.15",
- [ ]	"gatsby-remark-prismjs": "^3.2.9",
- [ ]	"prismjs": "^1.16.0",
- [ ]	"stylefmt": "^6.0.3",


```js
$ yarn add gatsby-plugin-module-resolver

Specify the plugin in your gatsby-config.js with the custom root or alias. Here’s an example:

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir
        aliases: {
          '@components': './components', // <- will become ./src/components
          helpers: './helpers', // <- will become ./src/helpers
          static: {
            root: './public', // <- will used as this alias' root dir
            alias: './static' // <- will become ./public/static
          }
        }
      }
    }
  ]
}
```


### SEGMENT ANALYTICS
```js
{
        resolve: `gatsby-plugin-segment-js`,
        options: {
            // your segment write key for your production environment
            // when process.env.NODE_ENV === 'production'
            // required; non-empty string
            prodKey: `SEGMENT_PRODUCTION_WRITE_KEY`,

            // if you have a development env for your segment account, paste that key here
            // when process.env.NODE_ENV === 'development'
            // optional; non-empty string
            devKey: `SEGMENT_DEV_WRITE_KEY`,

            // boolean (defaults to false) on whether you want
            // to include analytics.page() automatically
            // if false, see below on how to track pageviews manually
            trackPage: false
        }
    }
    ```
```
itles don’t appear when opening in the background, while using gatsby-plugin-offline
If you’re using gatsby-plugin-offline, you might notice that when opening a link in the background, the title doesn’t appear in the tab bar until switching to that tab. This is an upstream issue with React Helmet; however, it can be worked around by passing the defer={false} prop into your Helmet component. For example:

<Helmet title="foo bar" defer={false} />
```


## Why?

This project aims to provide a minimal base for building advanced GatsbyJS powered blogs.

It doesn't define any UI limitations in any way, and only gives you the basic components for SEO/Social Media/etc.

You are free to use any UI framework/styling options available to you.



## Features

- Gatsby v2 support
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Separate components for everything
- High configurability:
  - User information
  - User social profiles
  - Copyright information
  - More!
- Author segment
  - Name
  - Location
  - Description
  - Links
  - Follow Me button
- Posts in Markdown
  - Code syntax highlighting
  - Embed YouTube videos
  - Embed Tweets
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- Disqus support
  - Notifications about new disqus comments
- Google Analytics support
- NPM scripts for GitHub Pages deployment
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - Google+ share button
  - LinkedIn share button
  - Telegram share button
- SEO
  - Sitemap generation
  - robots.txt
  - General description tags
  - Schema.org JSONLD (Google Rich Snippets)
  - OpenGraph Tags (Facebook/Google+/Pinterest)
  - Twitter Tags (Twitter Cards)
- RSS feeds
- Loading progress for slow networks
- Offline support
- Web App Manifest support
- `/static/` and content folders are available to use with `gatsby-image` out of the box
- Netlify deploy configuration
- Development tools
  - ESLint for linting
  - Prettier for code style
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - CodeClimate configuration file and badge


## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed and updated) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-advanced-starter
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/Vagr9K/gatsby-advanced-starter YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```


WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
