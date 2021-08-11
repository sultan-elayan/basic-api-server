'use strict';

const POSTGRES_URI = "postgres://localhost:5432/sultan-elayan";
const car = require('./car.models');
const driver = require('./driver.model');
const { Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize( POSTGRES_URI , {
    host: process.env.HOST,
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false, // <--- Disable logging
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

}) ;


module.exports = {
    car: car(sequelize, DataTypes),
    driver: driver(sequelize, DataTypes),
    db: sequelize
}