const Sequelize = require('sequelize')
const connection = require('../utils/connection')


const course =  connection.define('course',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    img:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userId:{
        type:Sequelize.STRING,
        allowNull:false
    } 
})
module.exports = course

