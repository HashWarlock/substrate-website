<h1 align="center">
  <a href="https://www.substrate.io">
    <img alt="Substrate Logo" src="https://github.com/substrate-developer-hub/substrate-docs/raw/main/static/img/sub.gif" width="70%" />
  </a>
</h1>
<h1 align="center">Substrate Website</h1>
<h3 align="center">https://substrate.io</h3>

[![Netlify Status](https://api.netlify.com/api/v1/badges/f86ac67b-b1aa-41a7-95ec-3a2d14cb3bad/deploy-status)](https://app.netlify.com/sites/substrate-website/deploys)

## Content contribution, PRs and merging flow

- PR providing content (`json`, `md`...): open PR against `main` branch (production)
- PR providing new features: open PR against `main` branch (PR builds in netlify staging env)
- PR providing `hotfixes` open only against `main` (PR builds in netlify staging env)

## Website Architecture (IA /developers)

<div align="center">
<img width="1099" alt="image" src="https://user-images.githubusercontent.com/26929021/180010460-fdcb7973-2fd9-4ac5-9089-1302123a70ca.png">
</div>

## Development

### Install

Navigate into your cloned local repo directory and install all dependencies.

```shell
yarn
```

**Configure environment variables**

Copy `example.env.development` and rename to `.env.development`

Config URL variables based on your preferable local setup. URL will be used for links generation between Substrate websites.

Default localhost port configuration:

```env
GATSBY_WEBSITE_URL=http://localhost:8100
GATSBY_DOCS_URL=http://localhost:8200
GATSBY_MARKETPLACE_URL=http://localhost:8300
```

**Start development server**

Navigate into your new site’s directory and use the following command to start the development server locally.

```shell
yarn develop
```

## Setup, configuration & plugins

### i18n (bypassed)

Docs:

- https://github.com/microapps/gatsby-plugin-react-i18next#how-to-extract-translations-from-pages
- https://www.i18next.com
- https://react.i18next.com

#### Configuration

You can find the config for i18n, using i18next with `gatsby-plugin-react-i18next`.

- the markdown content is located in `./content/{language}/{content_type}/*`/
- the language strings are located in `./locales/{language}/{data_type}.json`

The default language (and fallback language) is `en` for english.

#### Extract strings

To extract the strings that needs to be translated, it is possible to run `yarn extract-locales`, which will generate the `/locales-tmp` folder.

### netlify-cms (bypassed)

`netlify-cms-app` & `gatsby-plugin-netlify-cms` are used to setup `[netlify-cms](https://www.netlifycms.org)` for this project.

The gatsby gatsby-config pluggin, points to the file `src/cms/index.js`, as entry file of the configuration.

#### local git-gateway backend

To develop and use netlify-cms with the data available in the local repository folder:

In the file `./.env.development` set:

```
GATSBY_NETLIFY_CMS_GIT_LOCAL=true
```

Then in the project's root folder run:

```
npx netlify-cms-proxy-server
```

and in an other shell and the same folder, run the development server as usual.
