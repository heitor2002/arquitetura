const express = require("express")
const mysql = require("mysql")
const app = express()
const cors = require("cors")

const port = 5000;

// IMPLEMENTAÇÃO DO CORS
app.use(cors())


//MySQL

//create a connection pool

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'clients'    
})

// GET ALL CLIENTS

app.get('/clients', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from data_clients', (err, rows) => {
            connection.release() // return the connection to pool
            if(!err){
                res.send(rows)
                console.log(rows)
                
            }else{
                console.log(err)
            }
        })
    })
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})