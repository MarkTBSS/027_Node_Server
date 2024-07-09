const http = require('http');

/* function requestListener(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}
http.createServer(requestListener); */

/* http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
});
 */

/* const server = http.createServer(requestListener);
server.listen(8080, () => {
    console.log('Server is listening on port 8080');
}); */

/* const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
});
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
}); */

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
});
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
