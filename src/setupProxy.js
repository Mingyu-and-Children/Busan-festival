const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://apis.data.go.kr/6260000/FestivalService/getFestivalKr',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
    })
  );
};
