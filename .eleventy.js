const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
  // Pass-through copies
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles");

  // Minify HTML for production
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
    }
    return content;
  });

  // Image Shortcode (Simulated eleventy-img integration)
  // In production: npm install @11ty/eleventy-img
  eleventyConfig.addNunjucksShortcode("image", function(src, alt, sizes = "100vw", className = "") {
    // This is a placeholder for the actual eleventy-img logic
    // which would generate multiple sizes/formats.
    return `<img src="${src}" alt="${alt}" sizes="${sizes}" class="${className}" loading="lazy" decoding="async">`;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};