const http = require('http');

const server = http.createServer(function(peticion, respuesta){
    // console.log(peticion);
    respuesta.writeHead(200, {"server":"NodeJs/12.0.19 (Win64)","Content-Type": "text/html"});
    respuesta.write('<h1>Hello</h1>');
    respuesta.end();
});

server.listen(8080, function () {
    console.log('Corriendo en el puerto 8080');
});