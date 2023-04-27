var dgram = require('dgram');//crea el datagrama e UDP
var server = dgram.createSocket("udp4");//crea un servidor UDP
server.on("message", function (msg, client) {//recive el mensaje del cliente
	if (msg == 'ADIOS') {//compara si es ADIOS
		server.close();//cierra la secion del servidor
	} else {
		console.log("Se recibió: " + msg);//muestra el mensaje del cliente
		const respuesta = 'Mensaje : ' + msg + " / Puerto : " + client.port + " / Direccion IP : " + client.address;//prepara respuesta la cliente
		server.send(respuesta, 0, respuesta.length, client.port, client.address, function () { console.log('Se envio la respuesta'); });//envia respuesta al cliente
	}
});
server.on('listening', function () {//funcion que mostrara el puerto del servidor
	const address = server.address();//variable que almacenara la direccion del servidor
	console.log('Servidor corriendo en puerto : ' + address.port);//varaible que mostrara el puerto del servidor
});
server.bind(2020);//el servidor esta a la escucha por el puerto 2020