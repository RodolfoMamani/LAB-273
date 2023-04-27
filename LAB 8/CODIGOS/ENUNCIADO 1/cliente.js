const http = require('http');
'use strict'
parametros = {
    host: 'localhost',
    path: '/dashboard/',
    port: 80,
    method: 'GET'
}
codigo = "";
http
    .get(parametros, (res) => {
        console.log(`Codigo  de estado : ${res.statusCode}`);
        console.log(res.headers);
        res.on('data', (data) => {
            codigo += data;
            // console.log(data.toString());
            console.log(codigo);
        });
    })
    .on('error', (err) => {
        console.log(`Codigo  de estado : ${res.statusCode}`);
    });
// console.log(codigo);