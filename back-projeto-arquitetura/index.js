const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");

app.use(express.json())

const port = 5000;

const db = require("./models/db")
const Client = require("./models/Client")


// IMPLEMENTAÇÃO DO CORS

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER , Content-Type, Authorization"
  );
  app.use(cors());
  next();
});

app.post("/orcamento", async (req,res) => {
    console.log(req.body);
    
    return res.json({
        error: false,
        message: "Cadastro enviado com sucesso!"
    })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
