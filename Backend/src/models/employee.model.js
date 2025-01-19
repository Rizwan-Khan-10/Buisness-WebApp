import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import Store from './store.model.js'; 

const Employee = sequelize.define('Employee', {
    _id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: sequelize.literal('UUID()'),
    },
    store_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Store, 
            key: '_id',   
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE', 
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact: {
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
    gender: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false, 
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    date_joined: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
    },
});

export default Employee;
