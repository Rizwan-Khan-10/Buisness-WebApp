import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import Store from './store.model.js'; 

const SalaryWages = sequelize.define('SalaryWages', {
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
    employee_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bonus: {
        type: DataTypes.NUMBER,
        allowNull: true, 
    },
    date_paid: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

export default SalaryWages;
