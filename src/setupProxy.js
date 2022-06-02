const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://apis.data.go.kr/6260000/FestivalService',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
