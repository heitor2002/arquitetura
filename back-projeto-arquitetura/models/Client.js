const Sequelize = require("sequelize");

const db = require("./db");

const Client = db.define("data_clients", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false
    },
    phone:{
        type:Sequelize.STRING,
        allowNull: false
    },
    city:{
        type:Sequelize.STRING,
        allowNull: false
    },
    subject:{
        type:Sequelize.STRING,
        allowNull: false
    },
    message:{
        type:Sequelize.STRING,
        allowNull: false
    },
})