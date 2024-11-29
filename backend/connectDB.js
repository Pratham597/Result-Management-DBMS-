import mysql from 'mysql2/promise';

let pool;

const connectDB = async () => {
    if (!pool) {
        try {
            pool = mysql.createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                database: process.env.DB_NAME,
                password: process.env.DB_PASSWORD,
                waitForConnections: true,
                connectionLimit: 10, // Adjust as needed
                queueLimit: 0,
            });
            console.log('Connected to the database successfully :)');
        } catch (error) {
            console.error('Failed to connect to the database:', error.message);
            throw error; // Let the app know the connection failed
        }
    }
    return pool;
};

export default connectDB;
