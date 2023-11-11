//call a function
const http = require("http")  

//create a port
const PORT = 2000;

//create a host
const host = "localhost";

//create a server     .       
const server = http.createServer((req, res) => {
    //show a text content
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello Vivian \n");
    res.write("Hello Vivian \n");
    res.end("Hello Vivian");
    

});
 
//connect your server to port
server.listen(PORT, host, ()=> {
    console.log(`server is listening on host: ${host}:${PORT}`)
}); 

