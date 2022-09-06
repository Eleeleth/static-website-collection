module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('manifest.webmanifest')

  const markdownIt = require('markdown-it')
  const markdownItAttrs = require('markdown-it-attrs')

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  }

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
  eleventyConfig.setLibrary('md', markdownLib)

  return {
    dir: {
      input: 'views',
      output: 'dist',
    },
  }
}
