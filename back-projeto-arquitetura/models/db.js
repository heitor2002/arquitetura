const Sequelize = require("sequelize");

const sequelize = new Sequelize('clients', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;