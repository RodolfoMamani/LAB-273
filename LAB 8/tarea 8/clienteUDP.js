var dgram = require('dgram');//crea el datagrama e UDP
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var client = dgram.createSocket("udp4");//crea un clinete UDP
console.log('escribe tu ECHO : ')
rl.on('line', function (msg) {//lee lo introducido por teclado
	console.log('escribe tu ECHO : ');
	if (msg == 'ADIOS') {//compara si es igual a ADIOS
		console.log('****** ADIOS AMIGO ******');
		rl.close();//cierra la clase de lectura	
		client.close();// cierra el socket DATAGRAMA UDP
	} else {
		client.send(msg, 0, msg.length, 2020, "localhost", function (err, bytes) {//envia el mensaje al servidor
			if (err)
				console.error('error: ' + err);
			else
				console.log('================== MESAJE ENVIADO =============');
		});
	}

});
client.on('message', function (msg) {//instancia y prepara para RECIVIR
	console.log(msg.toString());//muestra el mensaje enviado del servidor
});
