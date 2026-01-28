module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  // Sorted collection: posts by date, newest first
  eleventyConfig.addCollection("postsByDate", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Filter to format date as "MMM YYYY" (using UTC to avoid timezone shifts)
  eleventyConfig.addFilter("monthYear", function(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[date.getUTCMonth()] + " " + date.getUTCFullYear();
  });

  // Filter to format date as "DD MMM YYYY" (using UTC to avoid timezone shifts)
  eleventyConfig.addFilter("formatDate", function(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getUTCDate();
    return day + " " + months[date.getUTCMonth()] + " " + date.getUTCFullYear();
  });

  return {
    dir: {
      output: "docs",
      layouts: "layouts"
    }
  }
};
