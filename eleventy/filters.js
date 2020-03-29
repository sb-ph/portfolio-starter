const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");

var getIndex = (collection, currentSlug) => {
  let currentIndex = 0;
  collection.filter((page, index) => {
    currentIndex = page.fileSlug == currentSlug ? index : currentIndex;
  });
  return currentIndex;
};

module.exports = {
  dateToFormat: function(date, format) {
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat(String(format));
  },

  yearRange: function(date1Str, date2Str = false) {
    let date = false;
    let end = false;
    let start = false;
    const date1 = date1Str
      ? DateTime.fromJSDate(date1Str, { zone: "utc" })
      : false;
    const date2 = DateTime.fromJSDate(date2Str, { zone: "utc" });
    if (date1 && date2) {
      end = date1 < date2 ? date2 : date1;
      start = date1 < date2 ? date1 : date2;
    } else {
      end = date2;
    }
    const endYear = end.toFormat("yyyy");
    if (start && end) {
      const startYear = start.toFormat("yyyy");
      if (startYear == endYear) {
        date = endYear;
      } else {
        const startCent = startYear.slice(0, 2);
        const endCent = endYear.slice(0, 2);
        if (startCent == endCent) {
          date = startYear + "&ndash;" + end.toFormat("yy");
        } else {
          date = startYear + "&ndash;" + endYear;
        }
      }
    } else if (end) {
      date = endYear;
    }
    return date;
  },

  dateToISO: function(date) {
    return DateTime.fromJSDate(date, { zone: "utc" }).toISO({
      includeOffset: false,
      suppressMilliseconds: true
    });
  },

  cssmin: function(css) {
    return new CleanCSS({}).minify(css).styles;
  },

  nextInCollection: function(collection, currentSlug) {
    const currentIndex = getIndex(collection, currentSlug);
    const pages = collection.filter((page, index) => {
      return index == currentIndex + 1 ? page : false;
    });
    return pages.length ? pages[0] : false;
  },

  prevInCollection: function(collection, currentSlug) {
    const currentIndex = getIndex(collection, currentSlug);
    const pages = collection.filter((page, index) => {
      return index == currentIndex - 1 ? page : false;
    });
    return pages.length ? pages[0] : false;
  }
};
