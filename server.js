const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la 3eme réponse du serveur !');
});

server.listen(process.env.PORT || 5001);