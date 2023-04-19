const express = require("express")
const mysql = require("mysql")
const app = express()
const cors = require("cors")

const port = 5000;

app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello world!")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})