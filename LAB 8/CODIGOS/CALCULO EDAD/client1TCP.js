//Calcular los anios de edad de una persona en funcion de su anio de nacimiento.
const net = require('net');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const data = {
    port: 8888,
    host: '127.0.0.1'
}
const cliente = net.createConnection(data);
cliente.on('connect', ()=>{
    console.log('Cliente conectado al servidor ');
    rl.question("Escriba su anio de nacimiento>  ", (answer)=>{
        cliente.write(answer);
    });
})
cliente.on('data',(data)=>{
    console.log('Edad Actual: '+ data);
    cliente.end();
})
cliente.on('err', (err)=>{
    console.log(err.message);
})