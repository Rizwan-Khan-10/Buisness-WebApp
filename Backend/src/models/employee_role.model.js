import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import Store from './store.model.js';
import Employee from './employee.model.js';

const EmployeeRole = sequelize.define('StoreEmployee', {
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
        references: {
            model: Employee,
            key: '_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active',
    },
    allowed: {
    type: DataTypes.STRING,
    allowNull: false,
},
});

export default EmployeeRole;