const express = require('express')
const bodyParser = require('body-parser')
const expHbs = require('express-handlebars')
const Sequelize = require('sequelize')
const path = require('path')

//--- Routes add
const homeRoute = require('./routes/index')

const PORT = process.env.PORT || 3000     

const app = new express()
const hbs = expHbs.create({
    defaultLayout:"main",
    extname:"hbs"

})
app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));






app.get('/',(req,res)=>{
    res.render("index")
})

app.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`)
})


