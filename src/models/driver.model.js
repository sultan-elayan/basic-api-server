'use strict';

const driver = (sequelize, DataTypes) => {
    sequelize.define('driver', {
       name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
    });
}

module.exports = driver;