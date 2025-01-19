import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import Store from './store.model.js';
import Category from './category.model.js';

const Product = sequelize.define('Product', {
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
  category_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Category,
      key: '_id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  added_by: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity_unit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity_piece: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  purchased_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  selling_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  selling_unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  selling_piece: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  low_stock_alert: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  aging_stock: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gst: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  date_added: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

export default Product;
