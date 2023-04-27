//Ejercicio 2 guia de laboratorio
const dgram = require('dgram');
const cliente = dgram.createSocket('udp4');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Escribe la frase en minusculas:  ");
rl.on('line', (datos) => {
        cliente.send(datos, 4040, 'localhost', (err) => {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log("CONSULTA ENVIADA");
                }
            });
    })
cliente.on('message', (msg,info)=>{
    console.log(`CADENA EN MAYUSCULAS:  ${msg}`);
    console.log(`Informacion del Servidor: Puerto> ${info.port}, Address> ${info.address}`);
});
