module.exports = function (w) {

  return {
    files: [
      'src/**/*.ts',
      { pattern: 'src/**/*.spec.ts', ignore: true }
    ],

    tests: [
      'src/**/*.spec.ts'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    debug: true,
    testFramework: 'jest'
  };
};