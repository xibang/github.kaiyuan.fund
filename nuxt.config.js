module.exports = {
  head: {
    title: 'Github Rank (China)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Github Rank 中国排行榜' },
      { hid: 'keywords', name: 'keywords', content: 'Willin,Github,Rank,China,XiBang,西邦' },
      { name: 'author', content: 'Willin Wang' },
      { name: 'format-detection', content: 'telephone=no, email=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Github Rank' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'Github Rank' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    // routes: ['/'],
    fallback: true
  },
  build: {
    extractCSS: true,
    extend(config, { isDev }) {
      if (isDev) {
        // eslint-disable-next-line no-param-reassign
        config.devtool = '#source-map';
      }
    }
  }
};
