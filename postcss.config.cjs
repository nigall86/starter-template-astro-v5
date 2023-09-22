const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssCustomMedia = require('postcss-custom-media');
const postcssGlobalData = require('@csstools/postcss-global-data');
const cssnano = require('cssnano');

// const lib = process.env.npm_lifecycle_event;

// const inlineMediaQueries = lib === 'lib:media' || lib === 'lib:supports';
// todo: inline MQs for 'lib:all' when it's supported better

module.exports = {
  plugins: [
    postcssGlobalData({
      files: ['./src/sass/abstracts/_media-queries.css'],
    }),
    postcssCustomMedia(),
    cssnano({
      preset: 'default',
    }),
  ],
};
