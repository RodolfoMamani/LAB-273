var net = require('net');

let mensaje="";
for (let j = 2; j < process.argv.length; j++) {
    mensaje+=(process.argv[j]+" ");
}

var client = net.connect({port: 8080}, function() {
    console.log('conectado al servidor!');
    client.write(mensaje);
});

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function() {
    console.log('desconectado del servidor!');
});