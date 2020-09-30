const express = require('express')
const app = express()
const port = 8080

const bodyParser = require('body-parser')
const products = require('./router/products')
const users = require('./router/users')

app.get('/' , (req ,res) =>{
    res.send('Server Root')
})
app.get('/api', (req, res) => {
    res.send('Hello World')
})

app.use(bodyParser.json())
app.use('/api/products', products )
app.use('/api/users', users)

app.listen(port, () =>{
    console.log(`App is listening at http://localhost:${port}`)
})



