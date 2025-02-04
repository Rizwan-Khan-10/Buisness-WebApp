import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Store = sequelize.define('Store', {
    _id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: sequelize.literal('UUID()'),
    },
    store_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gstin_no: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
    },
});

export default Store;