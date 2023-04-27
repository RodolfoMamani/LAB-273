//EJERCICIO 2 - CLIENTE
//creamos el modulo net TCP
var net = require('net');
//guardamos el mensaje que vamos a enviar desde consola
let mensaje = "";
for (let j = 2; j < process.argv.length; j++) {
    mensaje += (process.argv[j] + " ");
};
//creamos socket cliente
var cliente = net.connect({ port: 8080 }, function () {
    console.log('--conectado al servidor!--');
    //enviamos el mensaje al servidor
    cliente.write(mensaje);
});
//recibimos el mensaje que nos envio el servidor
cliente.on('data', function (data) {
    //guardamos el mensaje en una variable
    mensajerecibido = data.toString();
    //mostramosel mensaje
    console.log(`texto en mayusculas = ${mensajerecibido}`);
    cliente.end();
});
//
cliente.on('end', function () {
    console.log('---desconectado del servidor---');
});