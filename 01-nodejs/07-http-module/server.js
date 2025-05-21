const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req, 'req');
    res.writeHead(200, { "Content-Type": "text/plain", "test-header":"I'll appear in the response headers" });
    res.end("Hello nodeJs from http module")
})

const port = '3000';

server.listen(port, () => {
    console.log(`Server is now listening to port ${port}`);
})
