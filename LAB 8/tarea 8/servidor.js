var net = require('net');//creamos una variable donde se almacene objetos tipo net

var server = net.createServer(function (connection) {//crea es SOCKET server
	console.log('cliente connectado');

	connection.write('Revise el monitor del servidor bro!\r\n');//envia un mensaje al cliente
	connection.on('data', function (data) {//instancia que recibira todo material del cliente y enviara algo al servidor
		console.log(data.toString());//mostrara el mensaje que recivira del cliente 
		connection.end();//cerrara la conexion al cliente
	});

	connection.on('end', function () { console.log('cliente desconectado'); });//instacia de cierre con el cliente
});

server.listen(8080, function () {//escuchara si un clinete esta tratando de conectarse por el puerto 8080
	console.log('servidor esta escuchando');
});