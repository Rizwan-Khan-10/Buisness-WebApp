# Business WebApp

A comprehensive web application designed to manage and streamline business operations such as store registration, inventory management, billing, and revenue tracking. The system offers distinct roles (Admin, Co-Admin, and Members) with specific permissions to ensure efficient business workflows.

## Features

### **Store Registration**
- Users can register their stores by providing admin details.
- Each store can have:
  - **1 Admin:** Full control over the store's operations.
  - **Multiple Co-Admins and Members:** With specific permissions assigned.

### **Role-Based Functionality**
1. **Admin:**
   - Has complete control over the store.
   - Can add, delete, and manage Co-Admins and Members.
   - Can view and modify all store operations, including inventory, billing, revenue, and user permissions.

2. **Co-Admin:**
   - Can manage the inventory:
     - Add products with details like stock age, low stock alerts, product location, and images.
     - Categorize products for better organization.
   - Can manage Members:
     - Add, delete, or edit member details.
   - Can create and manage charges and discounts for billing.
   - Can view revenue and purchase price if allowed.
   - Has all Member permissions.

3. **Member:**
   - Can create bills.
   - Can refund or edit bills if permissions are granted.
   - Can apply charges and discounts while generating bills.

### **Inventory Management**
- Products can be stored in categories.
- Each product can have:
  - Details like stock age, stock quantity alerts, and location.
  - Images of the product and its storage location.
- Automated tracking of:
  - Products nearing their expiry or aging.
  - Products with low stock.

### **Billing System**
- Members and Co-Admins can create bills with applied charges and discounts.
- New charges or discounts can be added instantly during billing.
- Allows refunds and edits for bills if permissions are granted.

### **Revenue and Reports**
- Admins and authorized Co-Admins can track revenue and purchase prices.
- View detailed reports for store performance.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - PostgreSQL
