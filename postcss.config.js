//const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // for project specific, ie. Landing Page, we can
    // reduce the filesize by exporting only used classes
    // process.env.NODE_ENV === 'production' &&
    //   purgecss({
    //     content: ['./public/**/*.html', './src/**/*.js'],
    //     css: ['./src/**/*.css'],
    //   }),
  ],
}
