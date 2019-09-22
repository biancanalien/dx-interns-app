let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer((req, res) => {
    const filePath = getCurrentFilePath(req.url);
    console.log("Load file path", filePath);
    fs.readFile(filePath, (err, data) => {
        console.log("data", data);
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

const getCurrentFilePath = (u) => {
    const urlParsed = url.parse(u, true);
    return "." + urlParsed.pathname + ".html";
}