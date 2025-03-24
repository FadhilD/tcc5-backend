import { Sequelize } from "sequelize";

const db = new Sequelize('RECOVER_YOUR_DATA','root', '',{

    host: '35.202.137.184',
    dialect: 'mysql'
} );

export default db;