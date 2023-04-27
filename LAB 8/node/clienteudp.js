//uso >node cliente.js elmensaje
const dgram = require('dgram');
let texto="";
for (let j = 2; j < process.argv.length; j++) {
    texto+=(process.argv[j]+" ");
}
const mensaje = Buffer.from(texto);
const cliente = dgram.createSocket('udp4');
cliente.send(mensaje,5555,'localhost', function(err,bytes){
    if (err) throw err;
});

cliente.on('message',function(mensaje){
    console.log('Respuesta del servidor --> '+mensaje.toString())
    cliente.close();
});