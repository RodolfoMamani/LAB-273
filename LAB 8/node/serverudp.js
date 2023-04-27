const dgram = require('dgram');
const servidor = dgram.createSocket('udp4');

servidor.on('listening', function(){
    console.log('en escucha')
});

servidor.on('message',function(mensaje,remote){
    servidor.send(Buffer.from(mensaje.toString().toLocaleUpperCase()),remote.port,remote.address,function(){
        console.log('Respuesta enviada')
    });
});

servidor.bind(5555);