var net = require('net');//creamos una variable donde se almacene objetos tipo net
var datos = new Buffer.from("*****	Mensaje Numero 1 al Servidor	*****");//creamos una variable con espacio de memoria para un mensaje
var datos2 = new Buffer.from("*****	Mensaje Numero 2 al Servidor	*****");//creamos una variable con espacio de memoria para un mensaje

var client = net.connect({ port: 8080 }, function () {
    console.log('conectado al servidor!'); //creamos una variable con una instancia de un metodo SOKET con puerto 8080 que se conecte al servidor
    client.write(datos);//enviamos un mesaje, la variable datos al servidor

});

var client = net.connect({ port: 8080 }, function () {
    console.log('conectado al servidor!'); //creamos una variable con una instancia de un metodo SOKET con puerto 8080 que se conecte al servidor
    client.write(datos2);//enviamos un mesaje, la variable datos2 al servidor
});

client.on('data', function (data) {//instacia donde recibira un mensaje del servidor
    console.log(data.toString());
    client.end();//termina la conecion hacia el servidor por una instacia END
});

client.on('end', function () { console.log('desconectado del servidor!'); });//esta es la instancia END aqui se cierra la conexion al servidor
