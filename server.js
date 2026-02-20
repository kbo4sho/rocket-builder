const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3464;
const server = http.createServer((req, res) => {
  const file = req.url === '/' ? '/index.html' : req.url;
  const fp = path.join(__dirname, file);
  const ext = path.extname(fp);
  const types = {'.html':'text/html','.js':'application/javascript','.css':'text/css'};
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': types[ext]||'text/plain'});
    res.end(data);
  });
});
server.listen(PORT, () => console.log(`Rocket Builder: http://localhost:${PORT}`));
