const express = require("express")
const cors = require('cors')

const router = require('./src/routes/routes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.get('/', (request, response)=>{
    response.send("Hellho World")
})

const port = 3000
app.listen(port, ()=>{
    console.log("Servidor rodando na porta: " + port)
})