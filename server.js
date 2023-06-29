const express = require('express')

const app = express()

const users = require('./data/users.json')

app.use(express.json())


// routes
// get request
app.get('/users', (req, res) => {
    res.send({
        success: true,
        message: "Data fetched successfully",
        data: users
    })
})

// get user of id
// app.get(`/users/${users.id}`, (req, res) => {
//     res.send({
//         success: true,
//         message: "Data fetched successfully",
//         data: users
//     })
// })


// post request
app.post('/user', (req, res) => {
    let name = req.body.name
    let age = req.body.age
    let location = req.body.location
    users.push({
        id: (users.length + 1).toString(),
        name: name,
        age: age,
        location: location
    })

    res.send({
        success: true,
        message: "User added successfully"
    })
})





app.listen(8000, () => {
    console.log('Node app is runnning on port 8000!')
})


