const { config } = require('dotenv');
config();

module.exports = {
    // Server Config
    port: process.env.PORT,
    
    // DBconn
    UserDB: process.env.UserDB,
    PasswordDB: process.env.PasswordDB,
    ServerDB: process.env.ServerDB,
    Database: process.env.Database,
    PortDB: process.env.PortDB,
};