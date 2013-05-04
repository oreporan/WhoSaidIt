var http= require('http');
console.log("start");
function serve(req,res)
{

res.writeHead(200,{"Content-Type":"text/plain"});
res.end("Hello Bob");
}
http.createServer(serve).listen(process.env.PORT);
console.log("end");
