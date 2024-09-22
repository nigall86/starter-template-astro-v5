module.exports = {
  plugins: [
    require('postcss-import'),
    require('@csstools/postcss-global-data')({
      files: ['./src/styles/abstracts/media-queries.css'],
    }),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'oklab-function': {
          preserve: true,
        },
        'cascade-layers': false,
      },
    }),
  ],
};
