
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(
        '<!DOCTYPE html>' +
        '<html>' +
        '<head><title>My DevOps Project</title></head>' +
        '<body>' +
        '<h1>Hello Sadia!</h1>' +
        '<h2>My Node.js Application</h2>' +
        '<p>This application is deployed using Docker.</p>' +
        '<p>I have updated my application to Version 2.</p>' +
        '<h3>Learning CI/CD Step by Step!</h3>' +
        '</body>' +
        '</html>'
    );
});

server.listen(3000, () => {
    console.log('Version 2 server running on port 3000');
});

