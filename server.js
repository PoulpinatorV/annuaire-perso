const http = require ('http');

const server = http.createServer((req,res)=>{
    res.end('Voici la réponse de mon serveur :)');
})

server.listen(process.env.PORT || 3000);
