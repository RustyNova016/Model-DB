import sequelize from "../config/SequelizeConnection";
import {DataTypes} from "sequelize";

export const Model_file = sequelize.define('model_file', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    versionNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {});
