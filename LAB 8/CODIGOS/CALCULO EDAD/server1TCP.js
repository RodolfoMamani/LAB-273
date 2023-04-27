//Calcular los anios de edad de una persona en funcion de su anio de nacimiento.
// aniadimos el modulo net
const net = require('net');
const servidor = net.createServer(); //Creamos el servidor
servidor.on('connection', (socket)=>{ //recibimos los parametros al socket
    console.log("Cliente Conectado")
    socket.on("data", (data)=>{   //evento con el cual recibimos los datos del cliente
        console.log("Anio de Nacimiento> " + data);
        var result = 2022 - parseInt(data);
        socket.write(result.toString()); //enviamos el mensaje al cliente
    });
    socket.on('close',()=>{
        console.log("Cliente Desconectado");
    });
    socket.on("error", (err)=>{
        console.log(err.message);
    });
})
servidor.listen(8888,()=>{
    console.log("Servidor escuchando", servidor.address().port);
})