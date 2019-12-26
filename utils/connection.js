const Sequelize = require('sequelize')
const DB_NAME = "scraper"
const USER_NAME = "postgres"
const PASSWORD = "root"

const connection = new Sequelize(DB_NAME,USER_NAME,PASSWORD,{
    host:"localhost",
    dialect:"postgres",
    "storage":"./session.postgres",
    define:{
        timestamps:false
    }
})
module.exports = connection