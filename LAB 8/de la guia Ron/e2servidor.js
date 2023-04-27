//EJERCICIO 2-SERVIDOR
//creamos el modulo net TCP
var net = require('net');
//creamos socket servidor
var servidor = net.createServer(function (connection) {
    //mostramos un mensaje para ver que el cliente se conecto correctamente
    console.log('cliente connectado');
    connection.on('data', function (mensaje) {
        //recibimos el mensaje del cliente y lo convertimos a mayuscula
        mensajerecibido = mensaje.toString().toLocaleUpperCase();
        //enviamos el mensaje en mayusculas
        connection.write(mensajerecibido);
    });
    connection.on('end', function () {
        console.log('cliente desconectado');
    });
});
//proceso que se ejecuta para escuchar al cliente y que esta a la escucha por el puerto 8080
servidor.listen(8080, function () {
    console.log('---el servidor esta conectado---');
});
//