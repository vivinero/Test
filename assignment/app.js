const express = require('express');
const fs = require('fs')
const path = ('path')

const port = 3001;
const app = express()

app.use(express.static('statics'))

app.get('/', (req, res) => {
    const filpath = path.join(__dirname, req.url)
    fs.exists(filepath,(fileExist)=> {
        if(fileExist){
            fs.readFile(filpath, 'ut8', (error, data) => {
                if(error){
                    res.status(500)
                    res.send("server does not exist")
                }else{
                    res.status(200)
                    res.send(data)
                }
            })
        }else{
            res.status(404)
            res.send("file does not exist")
        }
    })
})
app.listen(port, ()=> {
    console.log(`server is listening to http://:${port}`)
})