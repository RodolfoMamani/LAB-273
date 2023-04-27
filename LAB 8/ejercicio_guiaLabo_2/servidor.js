var dgram = require('dgram');//crea el datagrama e UDP
var server = dgram.createSocket("udp4");//crea un servidor UDP
server.on ("message", function(msg,client) {//recive el mensaje del cliente
	if(msg == 'ADIOS'){//compara si es ADIOS
		server.close();//cierra la secion del servidor
	}else{
		console.log("Se recibió: " + msg );//muestra el mensaje del cliente
		const saludo=msg.toString().toUpperCase()//se convierte a cadena el mensaje y luego a mayusculas
		const respuesta = 'Mensaje : '+saludo;//prepara respuesta la cliente
//envia la respuesta al cliente por medio del puerto y direccion encontrada en la conexion client
		server.send(respuesta, 0, respuesta.length, client.port, client.address, function(){ console.log('Se envio la respuesta');});
	}
});
//este proceso se ejecutra cuando este a la escucha del cliente, mostrando el puerto del servidor
server.on('listening', function () {//funcion que mostrara el puerto del servidor
    const address = server.address();//variable que almacenara la direccion del servidor
    console.log('Servidor corriendo en puerto : '+ address.port);//varaible que mostrara el puerto del servidor
});
server.bind(2020);//el servidor esta a la escucha por el puerto 2020