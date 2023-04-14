const express = require("express")
const app = express()
const cors = require("cors")

const port = 5000;

app.use(cors())

app.get("/", (req, res) => {
    res.send("Bem vindo")
})

app.listen(port, () => {
    console.log("Server running")
})