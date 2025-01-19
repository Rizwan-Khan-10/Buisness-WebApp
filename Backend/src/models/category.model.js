import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import Store from './store.model.js';

const Category = sequelize.define('Category', {
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
    added_by: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gst: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_added: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

export default Category;