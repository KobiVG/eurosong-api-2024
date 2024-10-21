// importeren van de express module in node_module
const express = require('express')
// aanmaken van een express app
const app = express()


// Endpoints
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/api/artists', (req, res) => {
    res.send([
        "JB",
        "Beyonce",
    ])
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})