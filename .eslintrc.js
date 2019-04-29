const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'willin',
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/component-name-in-template-casing': 0
  },
  settings: {
    'import/core-modules': ['debug', 'vue', 'vuex', 'axios', 'swiper', 'mockjs'],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [
              'node_modules',
              path.resolve(__dirname)
            ],
            extensions: [
              '.js',
              '.vue'
            ],
            alias: {
              // 主要是配置目录别名，以防 ESLint 报错
              '~': path.resolve(__dirname),
              '~~': path.resolve(__dirname),
              '@': path.resolve(__dirname),
              '@@': path.resolve(__dirname),
            }
          }
        }
      }
    }
  }
}
