module.exports = () => ({
  autoDetect: true,
  // files: ["src/**/*.js", "!src/**/*.test.js"],

  // tests: ["src/**/*.test.js"],

  // env: {
  //   type: "node",
  //   runner: "node",
  // },
  // setup: function (w) {
  //   require("@babel/register")({ only: /quill/ });
  // },
  // compilers: {
  //   "**/*.js?(x)": wallaby.compilers.babel({
  //     // Wallaby can automatically pick up the .babelrc config
  //   }),
  // },
  testFramework: {
    configFile: "./vitest.config.js",
  },
    // If Wallaby doesn't automatically transpile ES6+ or TypeScript, specify a compiler
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        // Tell Babel to use your existing configuration
        babel: require('@babel/core'),
        presets: [require('@babel/preset-env')]
      })
    }
});

// module.exports = function (wallaby) {
//     return {
//       autoDetect: true,
//       files: [
//         'src/**/*.js',
//         '!src/**/*.test.js',
//       ],

//       tests: [
//         'src/**/*.test.js',
//       ],

//       env: {
//         type: 'node'
//       },

//       setup: function (w) {
//         require('@babel/register')({ only: /quill/ });
//       },

//       compilers: {
//         '**/*.js?(x)': wallaby.compilers.babel({
//           // Wallaby can automatically pick up the .babelrc config
//         })
//       },

//       testFramework: {
//         configFile: './vitest.config.js',
//       },

//       debug: true,

//       setup(wallaby) {
//         const { vi } = require('vitest');
//         global.vi = vi;
//       },
//     };
//   };
