'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
    }
    Users.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        cpf: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        role: {
          allowNull: false,
          type: DataTypes.STRING,
        },
    },
        {
            sequelize,
            timestamps: false,
            modelName: 'Users',
        });




    return Users;
};