const Sequelize = require("sequelize");

const db = require("./db");

const Client = db.define("data_clients", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})