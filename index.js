import express from 'express';
import mysql from 'mysql2/promise'

const app = express();
const pool =  mysql.createPool({
    user:"root",
    host:"localhost",
    password:"",

    database:"shopleft"
})
console.log("connected to Mysql2")
app.get('/products', async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM products");
        res.json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
});
app.listen(3000,()=>{
    console.log('http://localhost:3000/products');
});