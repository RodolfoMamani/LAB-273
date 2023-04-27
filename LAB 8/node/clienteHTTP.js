const http = require('http');
const headers={
    host: 'fcpn.edu.bo',
    port: 80,
    path: '/',
    method: 'GET'
}

const conexion=http.get(headers,function(respuesta){
    console.log(respuesta.headers)
    respuesta.setEncoding('utf-8');
    respuesta.on('data',function(data){
        console.log(data);
    });
});

conexion.end;