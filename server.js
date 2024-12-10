const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors');
const app = express();
const proxy = httpProxy.createProxyServer({});

// Enable CORS
app.use(cors());

// Proxy requests
app.use((req, res) => {
  proxy.web(req, res, { target: 'https://gamehub-uoab.onrender.com' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
