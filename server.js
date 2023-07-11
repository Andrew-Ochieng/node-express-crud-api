const express = require('express')

const app = express()
app.use(express.json())

const data = require('./data/todos.json')
const todos = data.todos



// get request
app.get('/todos', (req, res) => {
    res.json(todos)
})

// get one todo
app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id)
    const todo = todos.find((item) => item.id === id)

    !todo ? res.status(404).send('Todo not found') : res.json(todo)  
})

// post request
app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        description: req.body.description
    }
    todos.push(newTodo)
    res.json(newTodo)
})

// put request
// app.put('/todos/:id')

// delete request
app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id)
    const todo = todos.findIndex((item) => item.id === id)

    todo === -1 ? res.status(404).send('Todo not found') : res.status(200).json('Todo deleted successfully!')
})








app.listen(8000, () => {
    console.log('Todo app is runnning on port 8000!')
})


