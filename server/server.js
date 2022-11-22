const express = require('express')
const db = require('./infra/database')
const { defineRouters } = require('./router/router')


const start = async () => {
    console.log("Establishing database connection...")
    await db.connect()
    console.log("Database connection established!")
    console.log("Starting application server...")
    
    
    const port = 8080
    const app = express()
    app.use(express.json())
    defineRouters(app)
    app.listen(port, () => console.log(`Rodando na porta ${port}`))
}

start()

