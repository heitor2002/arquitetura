const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { threadId } = require("worker_threads");
const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER, Content-Type, Authorization"
  );
  app.use(cors());
  next();
});

// MYSQL

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "projeto_arquitetura",
});

//CRIANDO API

app.get("/clients", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${threadId}`);

    connection.query("SELECT * from data_clients", (err, rows) => {
      connection.release();
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    });
  });
});

//ADICIONAR CADASTRO

app.post("/orcamento", (req, res) => {
  const params = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${threadId}`);

    connection.query("INSERT INTO data_clients SET ?", params, (err, rows) => {
      connection.release();
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    });
  });
});

//DELETAR CADASTRO

app.delete("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "DELETE from data_clients WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release()
        if(!err){
            res.send(`Cliente ID: ${[req.params.id]} foi removido com sucesso!`)
        }else{
            res.send(`Cliente ID: ${[req.params.id]} não foi removido!`)
        }
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
