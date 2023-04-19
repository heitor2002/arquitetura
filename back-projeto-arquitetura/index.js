const express = require("express")
const mysql = require("mysql")
const app = express()
// const cors = require("cors")

const port = 5000;

// app.use(cors())


//MySQL

//create a connection pool

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'clients'    
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})