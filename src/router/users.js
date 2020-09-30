const express = require('express')
const router = express.Router()

let users= [
    {
        "id": "1",
        "Firstname": "Cagdas",
        "Lastname": "Ozturk",
        "Username": "cagdas_ozturk",
        "Roles" : "user admin",
        "bids": []
    },
    {
        "id": "2",
        "Firstname": "Anto",
        "Lastname": "Kifork",
        "Username": "anto_Kifork",
        "Roles" : "user admin",
        "bids": []
    },
    {
        "id": "3",
        "Firstname": "Random",
        "Lastname": "random",
        "Username": "random_random",
        "Roles" : "user",
        "bids": []
    },
]

router
    .get('/', (req, res) => {
        res.json(users)
    })
    .get('/:id', (req, res) => {
       const user = users.find(candidate => candidate.id === req.params.id)

       res.status(200).json(user)
    })
    .post('/', (req, res) => {
        users.push(req.body)
        res.status(201).json(req.body);
    })

module.exports = router