'use strict';

const driver = (sequelize, DataTypes) => {
    sequelize.define('driver', {
       name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        age: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        }
    });
}

module.exports = driver;