
let http = require('http');
let fs = require('fs');
const { listenerCount } = require('process');
http.createServer(function (req, res) {

    var name = require('url').parse(req.url, true).query.name;
    if(name === undefined) name = ' Wolrd';
    
    if (name == 'burningbird') {
        var file = 'phonenix5a.png';
        fs.stat(file, function (err, stat) {
            if(err) {
                console.log('err');
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end('sorry, burningbird around right now \n');
            } else {
               var img = fs.readFileSync(file);
               res.contentType = 'image/png';
               res.contentLength = stat.size;
               res.end( img, 'binsry');
            }
        }); 
    } else {
        res.writeHead( 200, { 'content-type': 'text/plain'});
        res.end( 'hello' + name + '\n');
    }
}).listen(8124);

console.log( 'server runing at port 8124');