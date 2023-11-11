//readstream
//import the file system module

const fs = require("fs");

//read a file

const myReadStream = fs.createReadStream("./test.txt", "utf8")

//read the file in the chunks

myReadStream.on("data", (chunk) => {
    console.log(`Our chunk: ${chunk}`);
});

//end the read stream operation

myReadStream.on("end", () => {
    console.log("End of our chunk")
});