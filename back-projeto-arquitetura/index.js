const express = require("express");
const cors = require("cors")
const app = express()
const port = 5000;

app.get("/", (req, res) => {
    res.send("Olá mundo")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})