const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const port = 5000;

const db = require("./models/db")

//BODY-PARSER

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// IMPLEMENTAÇÃO DO CORS

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER , Content-Type, Authorization"
  );
  app.use(cors());
  next();
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
