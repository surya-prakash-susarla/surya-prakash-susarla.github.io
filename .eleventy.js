module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      output: "dist",
      layouts: "layouts"
    }
  }
};