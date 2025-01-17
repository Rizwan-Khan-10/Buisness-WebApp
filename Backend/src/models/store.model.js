import { DataTypes } from 'sequelize';
import sequelize from './connection.js';

const Store = sequelize.define('Store', {
    name: {
        type: DataTypes.STRING,  
        allowNull: false,        
    },
    address: {
        type: DataTypes.STRING,  
        allowNull: false,        
    },
    phone_number: {
        type: DataTypes.STRING,  
        allowNull: false,        
    },
    email: {
        type: DataTypes.STRING,  
        allowNull: true,         
        validate: {
            isEmail: true,       
        }
    },
    gstin: {
        type: DataTypes.STRING, 
        allowNull: true,         
    },
    imageUrl: {
        type: DataTypes.STRING,  
        allowNull: true,         
    },
});

export default Store;