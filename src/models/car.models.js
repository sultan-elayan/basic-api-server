'use strict';

const car = (sequelize, DataTypes) => {
    sequelize.define('car', {
       name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        model: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        }
    });
}

module.exports = car;