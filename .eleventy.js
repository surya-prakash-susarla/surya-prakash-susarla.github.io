module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  // Sorted collection: posts by date, newest first
  eleventyConfig.addCollection("postsByDate", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Filter to format date as "MMM YYYY"
  eleventyConfig.addFilter("monthYear", function(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[date.getMonth()] + " " + date.getFullYear();
  });

  return {
    dir: {
      output: "docs",
      layouts: "layouts"
    }
  }
};
