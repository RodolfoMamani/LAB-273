//creamos la conexion para conectarse hacia un servidor web usando el modulo http
const http = require('http');
//vamos a usar los modulos fs y url
var fs = require('fs');
var url = require('url');
//definimos los parametros para hacer una consulta a la pagina web, usando metodo get
//http://www.informatica.edu.bo/media/noticias/WhatsApp_Image_2022-10-12_at_11.56.52.jpeg
parametros = {
host:'www.informatica.edu.bo',
path:'/media/noticias/WhatsApp_Image_2022-10-12_at_11.56.52.jpeg',
port: 80,
method:'GET'
}
//obtenemos el nombre del archivo a descargar
var aux = (url.parse(parametros.path).pathname).split('/')
//guardamosen el nombre del archivo a descargar
var nombrearchivo = aux[aux.length-1];
//mostramos el nombre del archivo a descargar
console.log(nombrearchivo);
//creamos el archivo a descargar y almacenar
var archivo = fs.createWriteStream(nombrearchivo);
//hacemos una consulta a la pagina web
const cliente = http.request(parametros, function (peticion) {
//guardamos el archivo de descargar
peticion.pipe(archivo);
peticion.on('end', function () {
//podemos colocar algun mensaje
});
});
//cerramos la conexion con la pagina web.
cliente.end();