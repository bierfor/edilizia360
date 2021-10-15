const http = require('http'
);

http.createServer((req, res) => {
    //console.log(req);
    //res.writeHead(200)
    res.write('Page not found');
    res.end();

})
.listen(8080);


console.log('escuchando el puerto', 8080);