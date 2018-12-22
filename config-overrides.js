const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['@babel/plugin-transform-arrow-functions', {spec: true}],config)

  return config;
}