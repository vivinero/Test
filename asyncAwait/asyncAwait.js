const fs = require('fs');

async function ReadFromFile (){
    try{
        await fs.readFile("./testFile.txt", "utf8", (error, data) =>{
            if (error) {
                console.log("this file does not not exist.");
            }
            else{
                console.log(data)
            }
        })
    }catch(e){
        console.log(e.message)
    }
}
ReadFromFile()