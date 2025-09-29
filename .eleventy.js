const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/photos");
  

    


      // Pretty date for humans, e.g. "Sep 1, 2025"
  eleventyConfig.addFilter("prettyDate", (dateObj, fmt = "LLL d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(fmt);
  });
  
// HTML date for <time datetime="...">, e.g. "2025-09-01"
    eleventyConfig.addFilter("htmlDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });


    return {
        dir: {
            input: "src", //source files
            output: "public", //output files
            //pathPrefix: "/idlogs/",

        },
    };
};