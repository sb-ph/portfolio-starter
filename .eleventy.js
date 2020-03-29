const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const fs = require("fs");

const filters = require("./eleventy/filters.js");
const collections = require("./eleventy/collections.js");

module.exports = function(config) {
  // Plugins
  config.addPlugin(pluginRss);

  // Filters
  Object.keys(filters).forEach(filterName => {
    config.addFilter(filterName, filters[filterName]);
  });

  // Collections
  Object.keys(collections).forEach(collectionName => {
    config.addCollection(collectionName, collections[collectionName]);
  });

  // Markdown
  const mdOpts = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  const mdlib = markdownIt(mdOpts).use(markdownItAnchor, {
    permalink: false
  });
  config.setLibrary("md", mdlib);
  config.addNunjucksFilter("markdownify", markdownString =>
    markdownIt(mdOpts).render(markdownString)
  );
  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->" // Matches WordPress style
  });

  // BrowserSync
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  // Pass-thru files
  config.addPassthroughCopy("media");
  config.addPassthroughCopy("admin");

  // Layouts
  config.addLayoutAlias("base", "base.njk");
  config.addLayoutAlias("post", "post.njk");

  // Base Config
  return {
    templateFormats: ["njk", "md", "html", "liquid"],
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
