import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import Store from './store.model.js';

const Dates = sequelize.define('Dates', {
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
  update_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  updated_by: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_updated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

export default Dates;
