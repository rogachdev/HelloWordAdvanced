
let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {

    var name = require('url').parse(req.url, true).query.name;
    if(name === undefined) name = 'wolrd';
    
    if (name == 'burningbird') {
        var file = 'phonenix5a.png';
        fs.stat(file, function (err, stat) {
            if(err) {
                console.log('err');
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end('sorry, burningbird isn´t around right now \n');
            } else {
                           
            }
        }) 
    }
})