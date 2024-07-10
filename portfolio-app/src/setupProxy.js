// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");
const fs = require("fs");
const https = require("https");
const path = require("path");

const httpsServer = https.createServer({
  key: fs.readFileSync(path.resolve(__dirname, "../ssl/localhost-key.pem")),
  cert: fs.readFileSync(path.resolve(__dirname, "../ssl/localhost.pem")),
});

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.storyblok.com",
      changeOrigin: true,
      secure: false,
    })
  );
};

httpsServer.listen(3010, () => {
  console.log("HTTPS Proxy server is running on https://localhost:3010");
});
