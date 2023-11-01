const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
   // data: 'Xin chào các con vợ',
   res.end(
    `
    <html>
        <head></head>
        <body>
         <h1>Xin chao cac con vo</h1>
        </body>
    </html>
    `
   );

});

server.listen(8000);