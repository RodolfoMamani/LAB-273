// Ejercicio 2 Guia Laboratorio
const dgram = require('dgram');
const servidor = dgram.createSocket('udp4');
servidor.on('message',(msg, info)=>{
    console.log(`MENSAJE RECIBIDO DEL CLIENTE : ${msg}`);
    const mayuscula = msg.toString().toUpperCase();
    console.log(`Informacion del Cliente: Puerto> ${info.port}, Address> ${info.address}`);
    servidor.send(mayuscula, info.port, 'localhost', (err)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("RESPUESTA ENVIADA");
        }
    });
});
servidor.on('listening',()=>{
    console.log("SERVIDOR A LA ESPERA DE CONEXIONES ... ");
})
servidor.bind(4040);
