// se crea un puente de conexion para conectarse hacia un servidor web o conectar un servidor de paguinas web
var http = require('http');
//se crea una conexion con el servidor si la hubiese
//la consulta sera hacia el servidor, barra de separacion, por el puerto del apache y usando el metodo GET
const cliente = http.request({ host: 'localhost', path:'/', port:443, method:'GET'}, function (peticion) {
    var str = '';
//se consultara las cabeceras de la paguina consultada por en navegador.
    console.log(peticion.headers);
// de las consultas se obtendra los datos de la paguina web almacenados en la variable html
    peticion.on('data', function (html) {
    //estos datos se convertiran a cadena para ser mostrados
        console.log(html.toString());
    });
    //cuando la peticon se recivio, esta se cierra y llama a una funcion que muestra un mensaje de desconectado
    peticion.on('end', function () {
        // console.log(str);
        console.log('desconectado');
    });
});
//se cierra la conexion con el servidor.
cliente.end();