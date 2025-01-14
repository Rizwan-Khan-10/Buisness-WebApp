import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db/connection.js';

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();