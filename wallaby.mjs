
export default function (wallaby) {
  return {
    files: [
      'problems/*.mjs',    // Include all source files with .mjs extension
    ],

    tests: [
      '/test/*.mjs'    // Include all test files
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'mocha',

  };
};
