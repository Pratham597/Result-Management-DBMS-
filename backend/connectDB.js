import mysql from 'mysql2/promise';

const connectDB=async ()=>{
    let connection;
    try {
        const access = {
            host:`${process.env.DB_HOST}`,
            user: `${process.env.DB_USER}`,
            database: `${process.env.DB_NAME}`,
            password: `${process.env.DB_PASSWORD}`
        };
        connection=await mysql.createConnection(access);
        console.log('Connected to the database successfully :)');
    } catch (error) {
        console.log('Failed to connect!');
    }
    return connection;
}

export default connectDB;