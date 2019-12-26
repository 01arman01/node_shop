const Sequelize = require('sequelize')
const connection = require("../utils/connection")

const user = connection.define('user',{
    id:{
        primaryKey: true,
         type:Sequelize.INTEGER,
         autoIncrement:true,
         allowNull:false
         
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports = user
