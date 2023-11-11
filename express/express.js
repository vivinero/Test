const express = require('express');

const app = express()

app.listen(4042);

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello vivian')
});



// const express = require('express');
// const app = express();
// const port = 4040;
// app.use(express.json)

// app.get('/', (req, res)=>{
//     res.send('hello vivian')
// })
// app.listen(port, ()=> {
//     console.log(`server is listening on ${port}`)
// })