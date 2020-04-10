# ![Portfolio Starter](/content/media/banner.gif)

This is a lightweight portfolio starterkit built with [Eleventy](https://www.11ty.dev/). It is geared towards designers, illustrators, architects, and any other individuals who are interested in sharing their work and activity.

The intended user may not know any code but is interested in the tech behind their website, is willing to write in [Markdown](https://daringfireball.net/projects/markdown/), and is happy to learn via documentation.

- Features
- Getting Started
  - No-code setup
    1. Get a GitHub account
    2. Get an account with a static hosting provider
    3. Deploy your website
    4. Edit content in GitHub
  - Command line setup
    1. Set up repo locally and on GitHub
    2. Build or serve your website
    3. Deploy your website
    4. Edit content locally
  - Use a custom domain with your static hosting
  - Updates and backups
  - Editing content
    - Global data
    - Markdown files
      - Basic properties
      - Navigation properties
      - Pages
      - Posts
      - Projects
      - Homepage
      - Blog page (“Posts”)
      - Error
      - RSS feed
    - Media
  - Troubleshooting
  - Altering and extending your site
  - Colophon

## Features

- Understated design with an eye towards accessibility [TODO]
- A deliberately basic codebase that encourages tinkering and customisation even for people unfamiliar with code
- Generates a static site; static sites tend to load a lot faster than database-driven websites and can be hosted for free
- Supports posts, projects, pages, a one-level menu, and RSS out-of-the-box
- Command line not required; you don’t have to use a code editor or the command line to edit or even deploy this website

## Getting Started

To get started, you can go down the [no-code setup](#no-code-setup) route if you don’t want to deal with the command line and would prefer to GitHub’s interface, or you can do the [command line setup](#command-line-setup).

### No-code setup

#### 1. Get a GitHub account

GitHub is a platform that stores code. Your website code and content are going to live on GitHub. If you have an account already, go ahead and log in. If not, [sign up for an account](https://github.com/join). The free individual account is sufficient.

#### 2. Get an account with a static hosting provider

[Netlify](https://www.netlify.com/) and [ZEIT](https://zeit.co/) are hosting providers that offer generous free tiers for people with static websites such as this. If you have an account with either of these platforms already, log in. If you don’t, sign up for one.

#### 3. Deploy your website

By clicking one of the buttons below, you will fork this repository (i.e. create a duplicate version that lives in your own GitHub account) and then deploy this new website to your static hosting.

If you have a Netlify account:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sb-ph/portfolio-starter)

If you have a ZEIT account:

[![Deploy with ZEIT](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/sb-ph/portfolio-starter)

TODO add info about what happens next

#### 4. Edit content in GitHub

To edit or add content without the command line, you need to use GitHub’s interface to navigate your files within the [`/content`](/content) folder in your repository. See the [content editing documentation](#editing-content) to learn more about the structure of the `/content` folder and each of the files within it, particularly the [global data](#global-data) file that includes your website title and URL.

To edit a page, you must open the relevant file in GitHub and then click the Edit button (the button with the pencil icon) in the upper-right corner above the page contents.

If you want to add a new page, you must navigate to the [`posts`](/content/posts), [`projects`](/content/projects), or [`pages`](/content/pages) folder depending on what you want to add and then click the “Create new file” button near the top of the page. This will open a new editor page where you can add your filename and file contents. Since all text content is written in Markdown, the filename must end in `md` (i.e. `my-post-name.md`).

If you want to add media, you must navigate to the [`media`](/content/media) folder and then click the “Upload files” button near the top of the page. This will give you an area to upload one or more files. See the [media guidance](#media) for tips on file types and sizes.

To save edits or additions made in GitHub, you must commit your changes using GitHub’s interface at the base of the page. If you hooked up Netlify or ZEIT in the previous step, a commit will also tell GitHub to automatically deploy your changes. For more on what a commit is, see the [GitHub Glossary](https://help.github.com/en/github/getting-started-with-github/github-glossary). When you commit an edit or an addition directly in GitHub, you can use the default commit message that is pre-filled and should commit directly to the `master` branch (the default setting).

### Command line setup

The command line setup instructions assume that you have familiarity with the command line, that you have version 8 or higher of Node.js installed on your computer, and that you have a GitHub account.

#### 1. Set up repo locally and on GitHub

Clone repository locally into a named project folder by running `git clone https://github.com/sb-ph/portfolio-starter.git my-website` and then change to the new project folder by running `cd my-website`. Run `npm install` to install the dependencies including Eleventy.

Run `rm -rf .git` to remove the Git history for a fresh start, and then run `git init` to initialise a new git repo. Commit all of your files to create a new `master` branch, and then [add your project to GitHub using the command line](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line).

#### 2. Build or serve your website

To build the website in to the gitignored `/_site` directory, run `npx @11ty/eleventy`. To spin up a server for local development or content editing, run `npx @11ty/eleventy --serve`.

#### 3. Deploy your website

If you want to use Netlify or ZEIT, follow their documentation to get your repository hooked up to your hosting account for continuous deployment. If you want to use another hosting provider, you can find your static files in the `/_site` directory after you generate a build.

#### 4. Edit content locally

To edit content locally, spin up a server by running `npx @11ty/eleventy --serve` and then adjust the Markdown and JSON files within the `/content` directory. If your site is hooked up to continuous deployment, make sure you commit your changes to the right branch (probably `master`) otherwise they will not be deployed.

## Use a custom domain with your static hosting

Netlify and ZEIT give you a default subdomain automatically when you deploy your website, so this is an optional step. If you want to use your own domain, you should follow their instructions to set this up. [Read more about custom domains on ZEIT](https://zeit.co/docs/v2/custom-domains), or [read more about custom domains on Netlify](https://docs.netlify.com/domains-https/custom-domains/).

Both of these guides will walk you through how to set up your domain’s Domain Name System (DNS). Note that **DNS can be delicate.** The DNS records for your domain tell browsers where to find your website and tell email servers how to direct emails to you. Be sure to write down any existing DNS records before changing anything.

If you repoint the nameservers as part of the custom domain setup process and are already using your domain for email, you must add your MX records and any other records related to email to your new hosting provider _before_ you repoint the nameservers. If you do not, your email may go down.

## Updates and backups

After you’ve created your website, you might want to update it if any changes have been made to Portfolio Starter.

If you’re on an older version of Portfolio Starter and want to update it to a newer version, we recommend doing this manually by replacing all of the folders and files _except_ for the `/content` folder. Though it is possible to automatically sync updates via the command line or GitHub interface, it may not be advisable since it could overwrite your `/content` folder.

Regardless, you should back up your website before making any updates or major changes. Visit your repository homepage and click the green “Clone or download” button to download a zipped file of the entire repository, then store it somewhere safe.

## Editing content

All of the content lives in the [`/content`](/content) folder. This includes the [global data](#global-data), [Markdown files for each page](#markdown-files), and [media](#media). It is important to format and organise each of these files in a particular way so that your site deploys without errors and looks as expected.

### Global data

Certain metadata such as the site title and URL are used throughout the website. All of this global data is contained in the [`/content/_data/global.json`](/content/_data/global.json) file.

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

This is the only piece of content that must be written in JSON, a text format that is used to structure data. JSON syntax is _very_ strict. All keys (i.e. `title`) and all strings (i.e. `My website`) are enclosed in double quotes, and all properties (i.e. `"title": "My website"`) are separated by commas except for the last property. All JSON objects are enclosed in curly brackets `{}`. **Incorrect syntax in this file will result in an error, meaning your changes will not be deployed.**

These are the properties in more detail.

| Property   | Format      | Default | Description                                                                                                                           |
| ---------- | ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `author`   | JSON object | -       | A JSON object that includes the name and email address of the website author                                                          |
| `footer`   | Markdown    | -       | The footer text written in Markdown                                                                                                   |
| `lang`\*   | text        | `en`    | The [IANA language tag](https://www.w3.org/International/questions/qa-html-language-declarations) that declares your website language |
| `subtitle` | text        | -       | A short string that describes your website                                                                                            |
| `title`\*  | text        | -       | The title of your website                                                                                                             |
| `url`\*    | url         | -       | Your website URL                                                                                                                      |

### Markdown files

All of the main content pages including the posts, projects, pages, homepage, 404 error page, blog, and RSS feed are written in [Markdown](https://daringfireball.net/projects/markdown/). Markdown allows you to write using an easy-to-read, easy-to-write plain text format that can be converted to valid HTML. Visit the [markdown-it](https://markdown-it.github.io/) website for a full list of formatting options including lists, links, headings, and more. You can also take a look at the source for this README file; it’s written in Markdown too!

All Markdown files end in the `.md` extension, and this starterkit uses the rest of the filename to generate the page slug (the final part of a page’s URL).

Any folders or files that are preceded by an underscore `_` will not be published. Because of that, you can use an underscore to create drafts such as `/content/posts/_testing-a-draft.md`. _However_, it is critical to remember that your draft will be visible to others in GitHub if your repository is public.

Each Markdown file begins with [YAML](https://yaml.org/) frontmatter. YAML is a plain text syntax that allows human-readable text to be formatted as structured data. Frontmatter is the text at the top of the file that is fenced in by three dashes on either side, like so:

```yaml
---
layout: page
title: Contact
description: Get in touch with me via email or phone.
image: cloud-01.jpeg
---

```

The YAML frontmatter defines page-specific metadata such as the page title, the page description, and the layout.

#### Basic properties

These are the basic YAML properties that should be used on every page.

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

There is one more basic property available across all pages that pertains to navigation and is described in more detail below.

#### Navigation properties

This site uses the Eleventy [Navigation Plugin](https://www.11ty.dev/docs/plugins/navigation/) to generate a simple, one-level menu.

By default, the menu is set to include the About page and the Posts feed. To add a page to the menu, you must add the `eleventyNavigation` property to that page’s frontmatter. This is an example of the property in use on the About page [`/content/pages/about.md`](/content/pages/about.md):

```yaml
---
layout: default
title: About
eleventyNavigation:
  key: About
  order: 0
---

```

The `key` sub-property tells Eleventy to add this page to the navigation with the text “About”. The `order` sub-property tells Eleventy that it should come first in the navigation.

You can also add external links to the navigation, for example a link to your GitHub. See the [`/content/pages/github.md`](/content/pages/github.md) page for an example with the following frontmatter:

If you want to add an external link to the navigation, you can create a new Markdown file (for example, `/content/external.md`) with the below frontmatter:

```yaml
---
eleventyNavigation:
  key: GitHub &nearr;
  order: 3
  url: http://github.com/sb-ph/portfolio-starter
permalink: false
---

```

The `key` sub-property tells Eleventy to add this page to the navigation with the text “GitHub ” (`&nearr;` is the HTML code for a northeast arrow). The `order` sub-property is set to 3 so that it comes last in the menu, and the `url` sub-property is set to the desired URL. The `permalink` property is set to false so that this doesn’t publish a corresponding page on our website.

#### Pages

Pages are found in the [`/content/pages`](/content/pages) folder.

A page’s `layout` must be set to `page` in the frontmatter. Pages support only the [basic properties](#basic-properties) and [navigation properties](#navigation-properties) listed above.

#### Posts

Posts are found in the [`/content/posts`](/content/posts) folder.

A post’s `layout` must be set to `post` in the frontmatter. Posts support the [basic properties](#basic-properties) and [navigation properties](#navigation-properties) as well as the `date` property. This is an example of a post’s frontmatter:

```yaml
---
layout: post
title: Demo post
date: 2020-03-29 18:00:00
---

```

The `date` property determines the publish date of the post and thus the order in the blog and RSS.

You can use the HTML comment `<!--more-->` within your Markdown content to generate an excerpt for your posts like so:

```markdown
Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

<!--more-->

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.
```

If you use the `more` comment, only the text preceding the comment will be displayed on the blog and a “Read more” link will be displayed after this excerpt.

#### Projects

Projects are found in the [`/content/projects`](/content/projects) folder.

A project’s `layout` must be set to `project` in the frontmatter. Projects support the [basic properties](#basic-properties) and [navigation properties](#navigation-properties) as well as the `dateStart`, `dateEnd`, and `media` properties. This is an example of the frontmatter for a project page.

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

And these are the project-specific properties in more detail:

| Property    | Format       | Default | Description                                             |
| ----------- | ------------ | ------- | ------------------------------------------------------- |
| `dateEnd`\* | `YYYY-MM-DD` | -       | The end date of your project, used for sorting purposes |
| `dateStart` | `YYYY-MM-DD` | -       | The start date of your project                          |
| `media`     | YAML         | -       | A YAML list of media blocks, described below            |

The media property is a strictly-formatted YAML list that can contain image and video blocks. The properties that apply to both images and videos are outlined below.

| Property     | Format   | Default | Description                                                      |
| ------------ | -------- | ------- | ---------------------------------------------------------------- |
| `caption`    | markdown | -       | A caption describing your media                                  |
| `filename`\* | text     | -       | The filename of your media                                       |
| `height`     | integer  | -       | The height of your media in pixels                               |
| `width`      | integer  | -       | The width of your media in pixels                                |
| `size`       | text     | `lg`    | The size that the media should be displayed; `sm`, `md`, or `lg` |
| `type`\*     | text     | -       | `image` or `video`                                               |

Image blocks require one additional property:

| Property | Format | Default | Description                 |
| -------- | ------ | ------- | --------------------------- |
| `alt`\*  | text   | -       | The alt text for your image |

And video blocks allow the following additional properties. Note that video autoplay is only supported in certain browsers and devices.

| Property   | Format  | Default | Description                                           |
| ---------- | ------- | ------- | ----------------------------------------------------- |
| `controls` | boolean | false   | Whether or not the video controls should be displayed |
| `loop`     | boolean | false   | Whether or not the video should loop                  |
| `autoplay` | boolean | false   | Whether or not the video should automatically play    |
| `muted`    | boolean | false   | Whether or not the video should be muted              |

#### Homepage

TODO

#### Blog page (“Posts”)

The blog page is the [`/content/posts.md`](/content/posts.md) file.

The blog page’s `layout` must be set to `posts` in the frontmatter. The blog page supports the [basic properties](#basic-properties) and [navigation properties](#navigation-properties). Markdown written beneath the frontmatter is not displayed.

#### Error

The 404 error page is the [`/content/404.md`](/content/404.md) file.

The 404 error page’s `layout` must be set to `error` in the frontmatter. The error page supports only the `layout` and `title` [basic properties](#basic-properties).

#### RSS feed

The RSS page is the [`/content/rss.md`](/content/rss.md) file.

The RSS page’s `layout` must be set to `feed` in the frontmatter. The RSS page supports only the `layout` and `title` [basic properties](#basic-properties).

The RSS feed is automatically published to `/feed.xml`, so for example `https://yoursite.com/feed.xml`. If you want to add an RSS link in your navigation, see the [navigation properties](#navigation-properties) guidance to add an external link.

## Media

All of the media is stored in the `/content/media` folder.

Media files must be as small as possible to save space in your GitHub repository and your hosting. [Read more about GitHub’s repository limits](https://help.github.com/en/github/managing-large-files/what-is-my-disk-quota). Smaller media files will also load faster for your readers.

Small images should be around 800px wide, medium images should be around 1400px wide, and large images should be around 3000px wide. Images with large areas of flat colour may work best as PNGs. Images with more detail such as photography should be saved as JPGs.

The more images you add to a page, the longer it will take for that page to load. Be judicious about how many images you add to any one page.

## Troubleshooting

TODO

Images are broken

Links are broken

## Altering and extending your site

As mentioned above, this is a deliberately basic codebase that welcomes tinkering.

Smaller customisations such as altering the CSS can be done without the command line by editing the CSS file directly in GitHub. More extensive customisations are best done by developing locally with the command line. Refer to the [Eleventy documentation](https://www.11ty.dev/docs/) if you are interested in altering the [`/_includes`](/_includes) layouts or snippets.

These are a few suggestions for altering and extending this site:

- Edit the CSS to change the fonts or background colours
  – Alter the templates to work with a content delivery network (CDN) such as [`imgix`](https://www.imgix.com/) so that your media doesn’t live on GitHub
- Add your projects to AirTable and use their API to populate your website
- Hook your site up to a content management system (CMS) like [Forestry](https://forestry.io/) or [Sanity](https://www.sanity.io/)

If you’re interested in our help, just [get in touch](mailto:mail@sb-ph.com) and we’ll discuss!

## Colophon

TODO
