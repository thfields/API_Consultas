const corsProxy = require('cors-anywhere');

const host = 'localhost';
const port = 8080;

corsProxy.createServer({
  originWhitelist: [], // Permitir todas as origens
}).listen(port, host, () => {
  console.log(`CORS Anywhere proxy está rodando em http://${host}:${port}`);
});
