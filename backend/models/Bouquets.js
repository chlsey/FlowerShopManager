const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Sequelize = require("sequelize");
    return sequelize.define('Bouquets', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        img: {
            type: Sequelize.JSON,
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        width: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        height: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        category: {
            type: Sequelize.JSON,
            allowNull: false,
        },
        materials: {
            type: Sequelize.JSON,
            allowNull: false,
        },
        instructions: {
            type: Sequelize.TEXT,
        },
        message: {
            type: Sequelize.TEXT,
        },
        care: {
            type: Sequelize.TEXT,
        }
    })
}