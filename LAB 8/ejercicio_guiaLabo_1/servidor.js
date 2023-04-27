var http = require('http');

//http://localhost:80/lab273/

const cliente = http.request({ host: 'localhost', path:'/', port:8080, method:'GET'}, function (peticion) {
    var str = '';

    console.log(peticion.headers);
    //another chunk of data has been received, so append it to `str`
    peticion.on('data', function (html) {
        console.log(html.toString());
    });

    //the whole peticion has been received, so we just print it out here
    peticion.on('end', function () {
        // console.log(str);
        console.log('desconectado');
    });
});

cliente.end();