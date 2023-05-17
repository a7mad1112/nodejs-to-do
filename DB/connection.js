import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('todo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

const connectDB = async () => {
    return sequelize.sync()
        .then(res => console.log('DB is Connected'))
        .catch(err => console.log(err))
}

export {connectDB, sequelize}


