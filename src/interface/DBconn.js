const mysql = require('mysql2/promise');
const config = require('../config.js');

const dbAuth = {
  host: config.ServerDB,
  user: config.UserDB,
  //finance: config.FinanceDB,
  password: config.PasswordDB,
  database: config.Database,
  port: config.PortDB
};

// Crear un pool de conexiones
const pool = mysql.createPool(dbAuth);

async function getConnection() {
  try {
    return await pool.getConnection();
  } catch (error) {
    console.error('Error obteniendo conexión a la base de datos:', error);
    throw error;
  }
}

module.exports=getConnection;