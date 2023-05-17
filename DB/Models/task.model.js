import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const taskModel = sequelize.define('task',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    assignee:{
        type:DataTypes.STRING,
        allowNull:false
    },
    details:{
        type:DataTypes.STRING,
    },
    date:{
        type:DataTypes.DATE,
    },
    priority: {
        type: DataTypes.ENUM,
        values: ['low', 'medium', 'high', 'none'],
        defaultValue:'none'
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
})

export default taskModel