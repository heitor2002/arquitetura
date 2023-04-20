const Sequelize = require("sequelize");

const sequelize = new Sequelize('projeto_arquitetura', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Conectado ao banco de dados com sucesso!")
}).catch(() => {
    console.log("Erro ao se conectar com banco de dados!")
})

module.exports = sequelize;