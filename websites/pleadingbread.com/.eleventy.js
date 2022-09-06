module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('manifest.webmanifest')

  return {
    dir: {
      input: 'views',
      output: 'dist',
    },
  }
}
