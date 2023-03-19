module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "overrides": [{
    files: 'test/**/*.js',
    env: {
      mocha: true,
    }
  }],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
  }
}
