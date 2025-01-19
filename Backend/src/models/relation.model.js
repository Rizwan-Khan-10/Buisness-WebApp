import Store from './store.model.js';
import Employee from './employee.model.js';
import EmployeeRole from './employee_role.model.js';
import SalaryWages from './salarywages.model.js';
import Category from './category.model.js';
import Product from './product.model.js';
import Dates from './dates.model.js';

//Employee table fk
Store.hasMany(Employee, { foreignKey: 'store_id' });
Employee.belongsTo(Store, { foreignKey: 'store_id' });

//EmployeeRole table fk
Store.hasMany(EmployeeRole, { foreignKey: 'store_id' });
EmployeeRole.belongsTo(Store, { foreignKey: 'store_id' });

//Employee salary and wages table fk
Store.hasMany(SalaryWages, { foreignKey: 'store_id' });
SalaryWages.belongsTo(Store, { foreignKey: 'store_id' });

//Category table fk
Store.hasMany(Category, { foreignKey: 'store_id' });
Category.belongsTo(Store, { foreignKey: 'store_id' });

//Product table fk
Store.hasMany(Product, { foreignKey: 'store_id' });
Product.belongsTo(Store, { foreignKey: 'store_id' });

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

//Dates table fk
Store.hasMany(Dates, { foreignKey: 'store_id' });
Dates.belongsTo(Store, { foreignKey: 'store_id' });
