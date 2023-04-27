const http= require('http');
const fs=require('fs');
const formidable=require('formidable');

const index = fs.readFileSync('index.html')

http.createServer((request,response)=>{

    if (request.url=='/') {
        response.writeHead(200);
        response.write(index);
        response.end();
    }
    else if(request.url=='/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(request,function(err,fields,files){
            var oldpath = files.filetoupload.filepath;
			var newpath = './'+ files.filetoupload.originalFilename;
            fs.rename(oldpath,newpath, function(err){
                if(err) throw err;
                response.write('archivo subido');
                response.end();
            })
            
        });


    }

    
}).listen(9090);



