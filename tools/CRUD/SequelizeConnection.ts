import {getEnvVariables} from "../../model-db-api/src/tools/getEnvVariables";
import {Sequelize} from "sequelize";
import logger from "../../model-db-api/src/tools/logger";

export function getSequelizeConnection() {
    getEnvVariables();
    let {MYSQL_HOST, MYSQL_SCHEMA, MYSQL_USER, MYSQL_PASSWORD} = process.env;
    MYSQL_HOST = MYSQL_HOST || 'localhost';
    MYSQL_SCHEMA = MYSQL_SCHEMA || 'model-db_dev';
    MYSQL_USER = MYSQL_USER || 'root';
    MYSQL_PASSWORD = MYSQL_PASSWORD || 'root';

    console.log("Connecting to MySQL database...");

    return new Sequelize(MYSQL_SCHEMA, MYSQL_USER, undefined, {
        host: MYSQL_HOST,
        dialect: 'mysql',
        define: {
            freezeTableName: true
        },
    });
}

const sequelize = getSequelizeConnection();
export default sequelize;

export async function checkDBConnection() {
    try {
        await sequelize.authenticate();
        logger.info('Connection has been established successfully.', "Database");
    } catch (error) {
        logger.error('Unable to connect to the database: \n' + error, "Database");
    }
}