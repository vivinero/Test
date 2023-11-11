const http = require("http")

const host = "localhost"

const port = 2005

const fs = require("fs")

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/plain"})
    const vivian = fs.createReadStream("./testFile.txt", "utf8")
    vivian.pipe(res)
});

server.listen(port, host, ()=> {
    console.log(`server is listening on host: ${host}:${port}`)
}); 