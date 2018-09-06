module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/new-hire/'
    : '/',
  outputDir: 'docs'
}
