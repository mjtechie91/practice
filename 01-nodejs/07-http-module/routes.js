const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    console.log(url, "urll");
    if (url == '/') {
        return res.end("Home page");
    } else if (url == '/products') {
        return res.end("Products page content");
    }
    res.end("Requested page not found")
});

server.listen(3001, () => {
    console.log("nodejs server is listening on 3001 port")
})