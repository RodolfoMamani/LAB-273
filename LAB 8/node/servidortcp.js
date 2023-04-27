var net = require('net');

var server = net.createServer(function(connection) {
    console.log('cliente connectado');
    connection.on('data',function(mensaje){
        connection.write(mensaje.toString().toLocaleUpperCase());
    });
    connection.on('end', function() {
        console.log('cliente desconectado');
    });
});


server.listen(8080, function() {
    console.log('servidor esta escuchando');
}); 