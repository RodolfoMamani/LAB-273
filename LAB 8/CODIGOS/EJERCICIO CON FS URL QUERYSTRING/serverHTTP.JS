const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring')
var q = querystring.parse('year=2017&month=february');


http.createServer((req, res)=>{ //req=solicitud, res respuesta
    var direccion= url.parse(req.url,true);
    var ruta = "." + direccion.pathname;
    console.log(ruta);
    console.log(q.year);
    console.log(q.month);
    fs.readFile(ruta,(err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plane' });
                return res.end('404 not found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
}).listen(4042,function(){
    console.log("servidor escuchando");

})