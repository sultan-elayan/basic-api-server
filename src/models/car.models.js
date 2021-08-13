'use strict';

const car = (sequelize, DataTypes) => {
    sequelize.define('car', {
       name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}

module.exports = car;