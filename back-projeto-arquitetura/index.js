const express = require("express");
const cors = require("cors")
const app = express()
const port = 5000;

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors())
    next()
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})