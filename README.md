![](/content/media/banner.gif)

This is a lightweight portfolio starterkit built with [Eleventy](#). It is geared towards designers, illustrators, architects, and any other individuals who are interested in sharing images of their work and posts about their activity.

The intended user may not know any code but is interested in the tech behind their website, is willing to write in [Markdown](#), and is happy to learn via documentation.

## Features

### Design and accessibility

TODO

### Deliberately basic codebase

We’ve kept the codebase deliberately basic to encourage tinkering and customisation even for people that are unfamiliar with code. There are no build systems like Gulp or Webpack, and there are no JavaScript libraries like Vue or React.

### Generates a static site

Static websites tend to load a lot faster than database-driven websites, and they can often be hosted for free with hosting providers such as Netlify or Now.

### Command line not required

You don’t have to use a code editor or the command line to edit or even deploy this website. [Read more about how to create a new Portfolio Starter website in GitHub and deploy it](#TODO) all without leaving your browser.

## Getting Started

There are two ways to publish a website with this template depending on your technical skillset. Go down the [no-code setup](#) route if you don’t want to deal with the command line and would prefer to GitHub’s interface. Go down the [command line setup](#) route if you’re happy with `npm` and the command line.

### No-code setup

All you need to get started is a GitHub account, an account with a static hosting provider, and the ability to follow some instructions.

#### 1. Get a GitHub account

GitHub is a platform that stores code. Your website code and content are going to live on GitHub. If you have an account already, go ahead and log in. If not, [sign up for an account](#). The free individual account is sufficient.

#### 2. Get an account with a static hosting provider

[Netlify](#) and [ZEIT](#) are hosting providers that offer generous free tiers for people with static websites such as this.

If you have an account with either of these platforms already, log in. If you don’t, sign up for one.

#### 3. Deploy this website

By clicking one of the buttons below, you will fork this repository (i.e. create a duplicate version that lives in your own GitHub account) and then deploy this new website to your static hosting.

If you have a Netlify account:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sb-ph/portfolio-starter)

If you have a ZEIT account:

[![Deploy with ZEIT](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/sb-ph/portfolio-starter)

#### 4. Edit content

See the [content editing documentation](#) to learn more about where your content lives and how to edit it. The first thing you’ll want to do is edit your [global data](#) so that your website has the correct title and URL.

To edit or add content without the command line, you need to use GitHub’s interface to navigate your files within your repository. All of your website content lives in the [`/content`](/content) folder.

To save your edits or additions, you have to commit your changes using GitHub’s interface. This stores your changes in GitHub and will automatically deploy your changes to Netlify or ZEIT if you hooked one of them up in the previous step. For more on what a commit is, see the [GitHub Glossary](https://help.github.com/en/github/getting-started-with-github/github-glossary). When you commit an edit or an addition in GitHub, you can use the default commit message that is pre-filled. You should always commit directly to the `master` branch (the default setting) since this will ensure that your change gets deployed.

To edit a page, you must click the page to open it in GitHub and then click the Edit button with the pencil icon in the upper-right corner above the page contents.

If you want to add a new page, you must navigate to the [`posts`](/content/posts), [`projects`](/content/projects), or [`pages`](/content/pages) folder and then click the “Create new file” button near the top of the page. This will open a new editor page where you add your filename and file contents. Since all text content is written in Markdown, the filename must end in `md` (i.e. `my-post-name.md`).

If you want to add media, you must navigate to the [`media`](/content/media) folder and then click the “Upload files” button near the top of the page. This will give you an area to upload one or more files. See the [media guidance](#) for tips on file types and sizes.

### Command line setup

The command line setup instructions assume that you have familiarity with the command line, that you have version 8 or higher of Node.js installed on your computer, and that you have a GitHub account.

#### 1. Set up repo locally and on GitHub

Clone repository locally into a named project folder by running

```
git clone https://github.com/sb-ph/portfolio-starter.git my-website
```

Change to the new project folder: `cd my-website`

Remove the Git history for a fresh start: `rm -rf .git`

Install the dependencies: `npm install`

And initialise a new git repo: `git init`

Commit all of your files to create a new `master` branch, and then [add your project to GitHub using the command line](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line).

#### 2. Build or serve website

To build the website in to the `/_site` directory, run `npx @11ty/eleventy`. To spin up a server for local development, run `npx @11ty/eleventy --serve`.

#### 3. Deploy website

If you want to use Netlify or ZEIT, follow their documentation to get your repository hooked up to your hosting account for continuous deployment. If you want to use another hosting provider, you can find your static files in the `/_site` directory after you generate a build.

#### 4. Edit content

To edit content locally, spin up a server by running `npx @11ty/eleventy --serve` and then adjust the Markdown and JSON files within the `/content` directory. If your site is hooked up to continuous deployment, make sure you commit your changes to the right branch (probably `master`) otherwise they will not be deployed.

## Hook up a custom domain

This is an optional step since Netlify and ZEIT give you a default subdomain automatically when you deploy your website. If you want to use your own domain, you should follow their instructions to set this up. [Read more about custom domains on ZEIT](https://zeit.co/docs/v2/custom-domains), or [read more about custom domains on Netlify](#).

Both of these guides will walk you through how to set up your domain’s Domain Name System (DNS). **DNS can be delicate.** The DNS records for your domain tell browsers where to find your website and tell email servers how to direct emails to you. Be sure to write down any existing DNS records before changing anything.

If you repoint the nameservers as part of this setup process and are already using your domain for email, you must add your MX records and any other records related to email to your new hosting provider _before_ you repoint the nameservers. If you do not, your email may go down for a little while.

## Updates and backups

After you’ve created your website, you might want to update it if any changes have been made to Portfolio Starter. Though it is possible to automatically sync these changes via the command line and through the GitHub interface, you must do so with caution since it could remove your own `/content` folder and replace it with the default Portfolio Starter `/content` folder.

If you’re on an older version of Portfolio Starter and want to update it to a newer version, we recommend doing this manually by replacing all of the folders and files _except_ for the `/content` folder.

Before making any update or making major changes to your website, you should back it up. Visit your repository homepage and click the green “Clone or download” button to download a zipped file of the entire repository.

## Editing content

All of the content lives in the `/content` folder. The [global data](#) including website title and URL is written in JSON. All other text content is written in the straightforward plain-text syntaxes [Markdown and YAML](#). All of the [media](#) lives in the `/content/media` folder.

All of the folders and files that are preceded by an underscore `_` will not result in a permalink page. You can use this file syntax to create drafts, for example `/content/posts/_testing-a-draft.md` would be stored in your codebase but would not be a published page. _However_, it is critical to note that your draft will be visible to others in GitHub if your repository is public.

Read on to learn more about each page type and the properties that are available. Required properties have an asterisk.

### Global data

The global data in `/content/_data/global.json` is used throughout all of the pages on the website. It is the only content written in JSON, a text format that is used to structure data.

The details in this file should be set when the website is first set up and then likely will not be touched again unless the website is moved or the domain changes. This is an example of the `global.json` file:

```json
{
  "title": "Tortor Parturient Ridiculus",
  "subtitle": "A London-based graphic design practice",
  "lang": "en",
  "footer": "(c) Jane Doe, 2020",
  "url": "https://tpr.com",
  "author": {
    "name": "Jane Doe",
    "email": "mail@tpr.com"
  }
}
```

JSON syntax is _very_ strict. All keys (i.e. `title`) and all strings (i.e. `My website`) are enclosed in double quotes, and all properties (i.e. `"title": "My website"`) are separated by commas except for the last property. All JSON objects are enclosed in curly brackets `{}`. **Incorrect syntax in this file will result in an error, meaning your changes will not be deployed.**

These are the properties in more detail.

| Property   | Format      | Default | Description                                                                                                                           |
| ---------- | ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `author`   | JSON object | -       | A JSON object that includes the name and email address of the website author                                                          |
| `footer`   | Markdown    | -       | The footer text written in Markdown                                                                                                   |
| `lang`\*   | text        | `en`    | The [IANA language tag](https://www.w3.org/International/questions/qa-html-language-declarations) that declares your website language |
| `subtitle` | text        | -       | A short string that describes your website                                                                                            |
| `title`\*  | text        | -       | The title of your website                                                                                                             |
| `url`\*    | url         | -       | Your website URL                                                                                                                      |

### Markdown and YAML

All of the content pages except for the global data JSON file are written in [Markdown](#). Markdown is a plain text syntax that is easily converted in to valid HTML. Visit the [markdown-it](https://markdown-it.github.io/) website for a full list of formatting options.

Each Markdown file begins with [YAML](#) frontmatter. YAML is a plain text syntax that allows data to be formatted in a highly-structured manner, but it is more human-readable than alternatives such as JSON. Frontmatter is the text at the top of the file that is fenced in by three dashes on either side, like so:

```yaml
---
layout: default
title: Contact
description: Get in touch with me via email or phone.
image: cloud-01.jpeg
---

```

The YAML frontmatter defines page-specific data such as the page title, the page description, and the layout. These are the basic properties that should be used on every page. Required properties have an asterisk.

| Property      | Format | Default | Description                                                                           |
| ------------- | ------ | ------- | ------------------------------------------------------------------------------------- |
| `description` | text   | -       | Description of the page that is used for social media cards and search engine results |
| `image`       | text   | -       | The filename of the image that should be used for social media cards                  |
| `layout`\*    | text   | -       | The page layout                                                                       |
| `permalink`   | text   | various | The page permalink                                                                    |
| `title`\*     | text   | -       | The page title                                                                        |

The page title and layout are required on every Markdown file. The page layout determines how the content is displayed. When creating new pages, you should use the `project`, `post`, or `page` layouts.

If using an `image` for social media, refer to the documentation provided by the social media platforms for guidance about an appropriate image size. As a rule of thumb, 1200px wide should be appropriate and landscape works best across most platforms.

The page permalink is generated automatically depending on the layout. If you want to override it on any particular page, you can do so by setting the `permalink` property. The homepage, RSS, and error page permalinks should never be changed.

### Pages

Pages support only the basic YAML frontmatter listed above. On pages, the title and the Markdown content are displayed.

### Posts

Posts support the basic YAML frontmatter as well as the `date` property, like so:

```yaml
---
layout: post
title: Demo post
date: 2020-03-29 18:00:00
---

```

On posts, the title, the date, and the Markdown content are displayed.

You can use the HTML comment `<!--more-->` to generate an excerpt for your posts. If you use the more comment, the post will be truncated after that comment on the full posts feed and a “Read more” link will be displayed.

### Projects

Each project page displays a description, a small amount of optional data related to the project, media, and next / previous links to get to the next and previous projects. This is an example of the YAML frontmatter for a project page.

```yaml
---
layout: project
title: Your project title
dateStart: 1988-02-01
dateEnd: 2001-03-01
media:
  - type: image
    filename: cloud-01.jpeg
    size: md
    alt: A cloud
    caption: A collaboration with [Piper Haywood](https://piperhaywood.com)
  - type: video
    filename: ria-pacquee.mp4
    controls: false
    caption: A piece by [Ria Pacquée](http://riapacquee.com/)
---

```

These are the project-specific YAML properties in more detail.

| Property    | Format       | Default | Description                                                 |
| ----------- | ------------ | ------- | ----------------------------------------------------------- |
| `dateEnd`\* | `YYYY-MM-DD` | -       | The end date of your project, used for sorting purposes     |
| `dateStart` | `YYYY-MM-DD` | -       | The start date of your project                              |
| `media`     | YAML         | -       | A YAML list of media blocks, described in more detail below |

The media property allows you to add image and video blocks to your project. The media block properties that apply to both images and video are described below.

| Property     | Format   | Default | Description                                                      |
| ------------ | -------- | ------- | ---------------------------------------------------------------- |
| `caption`    | markdown | -       | A caption describing your media                                  |
| `filename`\* | text     | -       | The filename of your media                                       |
| `height`     | integer  | -       | The height of your media in pixels                               |
| `width`      | integer  | -       | The width of your media in pixels                                |
| `size`       | text     | `lg`    | The size that the media should be displayed; `sm`, `md`, or `lg` |
| `type`\*     | text     | -       | `image` or `video`                                               |

Image blocks allow this additional property.

| Property | Format | Default | Description                 |
| -------- | ------ | ------- | --------------------------- |
| `alt`\*  | text   | -       | The alt text for your image |

And video blocks allow these additional properties. Note that video autoplay is only supported in certain browsers and devices.

| Property   | Format  | Default | Description                                           |
| ---------- | ------- | ------- | ----------------------------------------------------- |
| `controls` | boolean | false   | Whether or not the video controls should be displayed |
| `loop`     | boolean | false   | Whether or not the video should loop                  |
| `autoplay` | boolean | false   | Whether or not the video should automatically play    |
| `muted`    | boolean | false   | Whether or not the video should be muted              |

### Homepage

TODO

### Posts page

The Posts page supports the same properties as a default page.

### 404 page

The 404 page only supports the `layout` and `title` properties.

### RSS feed

The RSS page only supports the `layout` and `title` properties.

### Navigation

This site uses the Eleventy [Navigation Plugin](https://www.11ty.dev/docs/plugins/navigation/) to generate a simple, one-level menu.

By default, the menu is set to include the About page and the Posts feed. To add a page to the menu, you add an `eleventyNavigation` property to the frontmatter. This is an example of the property in use on the About page `/content/pages/about.md`:

```yaml
---
layout: default
title: About
eleventyNavigation:
  key: About
  order: 0
---

```

This tells Eleventy to add this page to the navigation with the text “About” ordered first.

If you want to add an external link to the navigation, you can create a new Markdown file (for example, `/content/external.md`) with the below frontmatter:

```yaml
---
eleventyNavigation:
  key: Twitter
  url: https://twitter.com/piperhaywood
permalink: false
---

```

This would add a Twitter link to the navigation. The `permalink` property tells Eleventy that we don’t want it to result in a new page.

## Media

All of the media is stored in the `/content/media` folder.

Media files must be as small as possible to save space in your GitHub repository and your hosting. [Read more about GitHub’s repository limits](https://help.github.com/en/github/managing-large-files/what-is-my-disk-quota). Smaller media files will also load faster for your readers.

Small images should be around 800px wide, medium images should be around 1400px wide, and large images should be around 3000px wide. Images with large areas of flat colour may work best as PNGs. Images with more detail such as photography should be saved as JPGs.

The more images you add to a page, the longer it will take for that page to load. Be judicious about how many images you add to any one page.

## Altering and extending your site

As mentioned above, this is a deliberately basic codebase that welcomes tinkering.

Smaller customisations such as altering the CSS can be without the command line by editing the CSS file directly in GitHub. More extensive customisations are best done by developing locally with the command line. Refer to the [Eleventy documentation] if you are interested in altering the templates within `/_includes`.

These are a few suggestions for altering and extending this site:

- Edit the CSS to change the fonts or background colours
  – Alter the templates to work with a content delivery network (CDN) such as [`imgix`](https://www.imgix.com/) so that your media doesn’t live on GitHub
- Add your projects to AirTable and use their API to populate your website
- Hook your site up to a content management system (CMS) like [Forestry](#) or [Sanity](#)

If you’re interested in our help, just [get in touch](#) and we’ll discuss options.

## Colophon

TODO
