module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      output: "docs",
      layouts: "layouts"
    }
  }
};