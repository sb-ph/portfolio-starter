# Editing content

TODO Write content editing docs. Need to be clear that syntax has to be strict.

Required properties have an asterisk.

## GitHub

TODO some guidance about creating pages on GitHub

## Global data

The global data in `/content/_data/global.json` is used throughout all of the pages on the website. It is written in JSON, a text format that is used to structure data.

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

JSON syntax is very strict. All keys (i.e. `title`) and all strings (i.e. `My website`) are enclosed in double quotes, and all properties (i.e. `"title": "My website"`) are separated by commas except for the last property. All JSON objects are enclosed in curly brackets `{}`. Incorrect syntax in this file will result in an error.

These are the properties in more detail.

| Property   | Format      | Default | Description                                                                                                                           |
| ---------- | ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `author`   | JSON object | -       | A JSON object that includes the name and email address of the website author                                                          |
| `footer`   | Markdown    | -       | The footer text written in Markdown                                                                                                   |
| `lang`\*   | text        | `en`    | The [IANA language tag](https://www.w3.org/International/questions/qa-html-language-declarations) that declares your website language |
| `subtitle` | text        | -       | A short string that describes your website                                                                                            |
| `title`\*  | text        | -       | The title of your website                                                                                                             |
| `url`\*    | url         | -       | Your website URL                                                                                                                      |

## Markdown and YAML

All of the content pages except for the global data JSON file are written in Markdown. Markdown is a plain text syntax that is easily converted in to valid HTML. Visit the [markdown-it](https://markdown-it.github.io/) website for a full list of formatting options.

Each Markdown file begins with YAML frontmatter. YAML is a plain text syntax that allows data to be formatted in a highly-structured manner, but it is more human-readable than alternatives such as JSON.

The frontmatter is the text at the top of the file that is fenced in by three dashes on either side, like so:

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
| `layout`\*    | text   | -       | The page layout; `project`, `post`, `posts`, `error`, `home`, or `default`            |
| `permalink`   | text   | various | The page permalink                                                                    |
| `title`\*     | text   | -       | The page title                                                                        |

If using an `image` for social media, refer to the documentation provided by the social media platforms for guidance about an appropriate image size. As a rule of thumb, 1200px wide should be appropriate and landscape works best across most platforms.

The page permalink is generated automatically depending on the layout. If you want to override it on any particular page, you can do so by setting the `permalink` property. The homepage, RSS, and error page permalinks should never be changed.

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
category: Art direction
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

| Property    | Format       | Default | Description                                                                |
| ----------- | ------------ | ------- | -------------------------------------------------------------------------- |
| `category`  | text         | -       | A string that categorizes your project such as “Website” or “Illustration” |
| `dateEnd`\* | `YYYY-MM-DD` | -       | The end date of your project, used for sorting purposes                    |
| `dateStart` | `YYYY-MM-DD` | -       | The start date of your project                                             |
| `media`     | YAML         | -       | A YAML list of media blocks, described in more detail below                |

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

### Homepage

TODO

### Blog / News page

TODO

### 404 page

TODO

### RSS feed

TODO

## Media

TODO

Note about how media can take up a lot of space and can be slow to deploy

don't put them all on the homepage!
