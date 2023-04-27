//importamos el modulo http
const http = require('http')
//DEfinimos el puerto por el cual estara en escucha
const port = 7777
// creamos el servidor usando el modulo http
http.createServer((request, response) =>{
	//escribimos la  respuesta que se enviara en las cabeceras
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	//escribimos el contenido que se le mandara al cliente
	response.write('CALLISAYA QUISPE GROVER PAUL - 11067802 - Paralelo: C');
	//terminamos de enviar la respuesta
	response.end();
//ponemos el servidor en el puerto que esta almacenado en la constante port (7777)
}).listen(port)
