const express = require('express');
const app = express();
const port = 8080;

const products = require('./router/products')

app.get('/' , (req ,res) =>{
    res.send('Server Root')
})
app.get('/api', (req, res) => {
    res.send('Hello World')
})

app.use('/api/products', products )

app.listen(port, () =>{
    console.log(`App is listening at http://localhost:${port}`)
})



