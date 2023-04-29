const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { threadId } = require("worker_threads");
const jwt = require("jsonwebtoken")
const app = express();
const port = 5000;

require("dotenv").config()
const SECRET = process.env.JWT_SECRET;

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
//API CLIENTES CADASTRADOS
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

//API PORTFOLIO

app.get("/portfolio-edit", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * from data_portfolio", (err, rows) => {
      connection.release();
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    });
  });
});

//API PROVA SOCIAL
app.get("/social-proof", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * from data_social", (err, rows) => {
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

//ADICIONAR NOVO PROJETO

app.post("/portfolio-edit", (req, res) => {
  const params = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query(
      "INSERT INTO data_portfolio SET ?",
      params,
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send("Novo projeto cadastrado com sucesso");
        } else {
          res.send(err);
        }
      }
    );
  });
});

//ADICIONAR PROVA SOCIAL

app.post("/social-proof", (req, res) => {
  const params = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query(
      "INSERT INTO data_social SET ?",
      params,
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send("Novo projeto cadastrado com sucesso");
        } else {
          res.send(err);
        }
      }
    );
  });
});

//DELETAR CADASTRO

app.delete("/clients/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "DELETE from data_clients WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(`Cliente ID: ${[req.params.id]} foi removido com sucesso!`);
        } else {
          res.send(`Cliente ID: ${[req.params.id]} não foi removido!`);
        }
      }
    );
  });
});

//DELETAR PROJETO DO PORTFÓLIO

app.delete("/portfolio-edit/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "DELETE from data_portfolio WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(`Projeto id: ${[req.params.id]} foi removido com sucesso!`);
        } else {
          res.send(`Erro ao remover projeto id: ${[req.params.id]}!`);
        }
      }
    );
  });
});

//DELETAR PROVA SOCIAL

app.delete("/social-proof/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "DELETE from data_social WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(`Prova social id: ${[req.params.id]} foi removida com sucesso!`);
        } else {
          res.send(`Erro ao remover prova social id: ${[req.params.id]}!`);
        }
      }
    );
  });
});

//ATUALIZAR CADASTRO

app.put("/clients", (req, res) => {
  const { id, name, email, phone, subject, message, read } = req.body;
  console.log(id, read);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${threadId}`);

    connection.query(
      "UPDATE data_clients SET `read` = ? WHERE id =?",
      [read, id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(rows);
        } else {
          res.send(err);
        }
      }
    );
  });
});

//ATUALIZAR PORTFÓLIO

app.put("/portfolio-edit", (req, res) => {
  const { id, title, description, imgUrl } = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "UPDATE data_portfolio SET `title` = ?, `description` = ?, `imgUrl` = ? WHERE id = ?",
      [title, description, imgUrl, id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(rows);
        } else {
          res.send(err);
        }
      }
    );
  });
});

//ATUALIZAR PROVA SOCIAL

app.put("/social-proof", (req, res) => {
  const { id, name, message } = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "UPDATE data_social SET `name` = ?, `message` = ? WHERE id = ?",
      [name, message, id],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.send(rows);
        } else {
          res.send(err);
        }
      }
    );
  });
});

//OBTER USUÁRIO ADMIN
const user = {
  id: 1,
  email: "mail@mail.com",
  username: "user",
  password: "123"
}

app.post("/login", (req, res) => {

  const verifyUsername = req.body.username === user.username;
  const verifyPassword = req.body.password === user.password;
  if(verifyUsername && verifyPassword){
    console.log("Informações compatíveis")
    const token = jwt.sign({username: user.username, email: user.email},SECRET);
    return res.json({auth: true, token})
  }else{
    console.log("Usuário ou senha incorretos.")
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
