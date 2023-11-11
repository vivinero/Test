const fs = require("fs").promises

const myDoc = "./promise.txt";
//implement with a promise

fs.readFile(myDoc, 'utf8')
.then((data) => {
    console.log(data)
})
.catch((e) =>{
    console.log("message ", e)
})