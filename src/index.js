var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res){
  if(req.url == "/welcome"){
    res.writeHead(200, {"content-type":"text"});
    res.write("Welcome to Dominos!");
    res.end();
  }
  else if(req.url == "/contact"){
    res.writeHead(200, {"content-type":"json"});
    res.write(JSON.stringify({
        phone: '18602100000', 
  	    email: 'guestcaredominos@jublfood.com' 
    }))
    res.end();
  }
  else{
    res.writeHead(404,{"content-type":"text.html"});
    res.write("<h1>Page not Found</h1>");
    res.end();
  }
}

httpServer.listen(8081,()=>{console.log("server up")});