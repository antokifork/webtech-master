const express = require('express');
const router = express.Router()


let products = [
    {
        "id": "1",
        "name": "nike",
        "size": "11",
        "category": "shoes",
        "auction_end": "2020/11/1-12:00",
        "bids": [
            {
                "bid_name": "Cagdas",
                "bid_prize": "101"
            }
        ]
    },
    {
        "id": "2",
        "name": "adidas",
        "size": "11",
        "category": "shoes",
        "auction_end": "2020/11/1-12:00",
        "bids": [
            {

            }
        ]
    }
]

const productTemplate = ['id', 'name', 'size', 'category', 'auction_end', 'bids']

router
    .get('/', (req, res) => {
        let response = []

        const startTimeStamp = Date.now()
        setTimeout(() => {
            const endTimeStamp = Date.now() - startTimeStamp
            if (Math.floor(endTimeStamp / 1000) === 10) {
                res.status(503).end("Server cannot handle the request due to server overloading or is down for maintenance")
            }
        }, 10000)

        if(typeof req.query.name != 'undefined'){
            response = products.filter(function (product){
                if(product.name === req.query.name){
                    return product
                }
            })
        }
        else{
            response = products
        }

        if(response.length === 0){
            res.status(404)
        }

        res.json(response)
    })
    .get('/:id', (req, res) => {
        const id = req.params.id;
        const product = products.find(candidate => candidate.id === id)

        if (product === undefined) {
            res.status(404).end(`product with id: ${id} does not exist`)
        }
        for(let a = 0; a < productTemplate.length; a++){
            if (!product.hasOwnProperty(productTemplate[a])) {
                res.status(422).end(`Product property ${productTemplate[a]} is missing`)
            }
            if(product[productTemplate[a]] === '' || product[productTemplate[a]] === ' ' || product[productTemplate[a]] === undefined){
                res.status(412).end(`Product ${productTemplate[a]} is missing a value`)
            }
        }
        res.status(200).json(product).end("Products page")
    })


module.exports = router