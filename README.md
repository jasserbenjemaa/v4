# Jasser Ben Jemaa - Portfolio

My personal portfolio and blog, built with [Gatsby](https://www.gatsbyjs.org/) and hosted on [Vercel](https://jasserbenjemaa-projects.vercel.app/).

## Credits

This site is a fork of [brittanychiang.com (v4)](https://github.com/bchiang7/v4) by [Brittany Chiang](https://brittanychiang.com). The original design and code are hers. I customized the content and added my own changes, including a blog with previous and next post navigation.

Thank you, Brittany, for keeping your site open source. If you want to use her work for your own site, please give her proper credit by linking back to [brittanychiang.com](https://brittanychiang.com).

## Installation and set up

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn
   ```

4. Start the development server

   ```sh
   npm start
   ```

## Building and running for production

1. Generate a full static production build

   ```sh
   npm run build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## Writing blog posts

Posts live in `content/posts/`. The number at the start of the file name sets the order of the posts and the previous and next links, so use two digits:

```
content/posts/
├── 00-first-post.md
├── 01-second-post.md
└── 02-third-post.md
```

Each post starts with this frontmatter:

```md
---
title: 'Post title'
description: 'One-sentence summary'
slug: '/blog/post-slug'
date: '2026-10-06'
tags: ['Tag one', 'Tag two']
draft: false
---
```

Set `draft: true` to hide a post.

## Color reference

| Color          | Hex       |
| -------------- | --------- |
| Navy           | `#0a192f` |
| Light Navy     | `#112240` |
| Lightest Navy  | `#233554` |
| Slate          | `#8892b0` |
| Light Slate    | `#a8b2d1` |
| Lightest Slate | `#ccd6f6` |
| White          | `#e6f1ff` |
| Green          | `#64ffda` |

## License

This project keeps the license of the original repository. See the [LICENSE](LICENSE) file.
