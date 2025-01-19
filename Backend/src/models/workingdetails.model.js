import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const WorkingDetails = sequelize.define('WorkingDetails', {
    _id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    store_id: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    employee_id: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    role: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    date_joined: {
        type: DataTypes.ARRAY(DataTypes.DATE),
        allowNull: false
    },
});

export default WorkingDetails;