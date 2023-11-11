// const fs = require('fs')
// const Readfile = ('./callBack.txt')

// fs.readFile(Readfile, 'utf8', (error, data) => {
//     if(error){
//         console.log("Message" + error)
//         console.log("Message: Unable to read file " + myDocument)
//     }else{
//         console.log(data)
//     }
// });

const fs = require('fs')

const writeMyFile = ("./callBack.txt")
    fs.writeFile(writeMyFile, "this is an added file", (error) => {


if(error){
    console.log(Message.e)
}else{
    console.log("success")
}

console.log("i just added a new file")

})


