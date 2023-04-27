var http = require('http'); 
var fs = require('fs'); 
const url = require('url');

var enlace='http://www.fcpn.edu.bo/wp-content/uploads/2021/12/instituto_ie.jpg'
var aux=(url.parse(enlace).pathname).split('/')
var namefile=aux[aux.length-1];

var file = fs.createWriteStream(namefile); 
var request = http.get(enlace, function(response) { 
    response.pipe(file); 
});
