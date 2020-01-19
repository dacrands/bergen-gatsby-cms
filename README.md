<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

<h1 align="center">
  Bergen STEM
</h1>

![Bergen STEM Landing](https://i.imgur.com/bAL2hBT.jpg)

Website designed and built for the STEM program at Bergen Community College. 

## Prerequisites
The following instructions assume you have Node and npm installed ([Downloading and installing Node.js and npm](https://www.npmjs.com/)), as well as knowledge of [GatsbyJS](https://www.gatsbyjs.org/) ([GatsbyJS tutorial](https://www.gatsbyjs.org/docs/quick-start/)).


## Installing
Install the Gatsby CLI using npm
```
npm install -g gatsby-cli
```

Clone the repository (https://github.com/dacrands/bergen-gatsby-cms.git) and `cd` into it.

Install your packages
```
$ npm i
```

You will need to modify the `config.yml` as follows:

*./static/admin/config.yml*

Replace
```yml
backend:
  name: github
  repo: dacrands/bergen-gatsby-cms
```

with the following:
```yml
backend:
  name: test-repo
```


To learn more about Gatsby and the Netlify CMS or configuring your own backend, please reference the following tutorial: https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/

## npm scripts

Development Build

```
$ gatsby develop
```

Production Build (Can be found in `./public`)
```
$ gatsby build
```

Serve Production Build
```
$ gatsby serve
```

Run Prettier
```
$ npm run format
```

### Clearing the cache
If the build fails, try deleting the `.cache` folder. Previous caches may lead GraphQL to query undefined data.

## Deployment

Modify the `gatsby-config` to your Google Analytics info, or remove GA by deleting it from `gatsby-config` and running `npm uninstall gatsby-plugin-google-analytics`.

*./gatsby-config.js*
```javascript
{
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: "<your-GA-tracking-ID>",
  }
}
```
Hosted with [Netlify](https://www.netlify.com/).

## Built With
* [GatsbyJS](https://www.gatsbyjs.org/)
* [Netlify-CMS](https://www.netlifycms.org/)

## Authors

David Crandall