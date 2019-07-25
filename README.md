# Gatsby Product Starter

An opinionated advanced Gatsby starter template, optimal for building landing pages and product websites, offering a modular folder structure for pages, post and non blog-only site. A derivation of https://github.com/Vagr9K/gatsby-advanced-starterAdvanced Gatsby Starter



## Why?

Gatsby has become popular for building personal developer websites and a lot of resources are available for using it to build contentful websites, however very little is considered about utilizing it to build custom business websites, and landing pages for Products and Startups alike. This starter project utilizes, styled components for all design, provides a modular structure for layout templates [page, blog, testimonials, case studies], module resolver to keep path links absolute and a unique structure for page and post SEO. You are free to use any UI framework/styling options available to you.



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
- Segment Analytics Support *FEATURE*
- NPM scripts for GitHub Pages deployment
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - Google+ share button
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
gatsby new YourProjectName https://github.com/tecmie/gatsby-product-starter
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/tecmie/gatsby-product-starter YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```


WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
