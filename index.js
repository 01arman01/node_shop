const express = require('express')
const bodyParser = require('body-parser')
const expHbs = require('express-handlebars')
const Sequelize = require('sequelize')
const path = require('path')
const methodOverride = require('method-override')

//--sessions
const session = require("express-session")
const sequelizeSession = require('connect-session-sequelize')(session.Store);




const connection = require('./utils/connection')
//--- Routes add
const homeRoute = require('./routes/index')
const addRoute = require('./routes/add')
const coursesRoute = require('./routes/courses')
const cardRoute = require('./routes/card')

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

app.use(methodOverride('_method'))


app.use(session({
  secret:"some secret value",
  resave:false,
  store: new Sequelizestore({
    db:connection
  }),
  saveUninitialized:false,
    proxy:true
  
}))


connection.sync({
  force:true
})
.then(()=>{
  app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
  })
})
.then(()=>{
   //routes use
app.use('/',homeRoute)
app.use('/add',addRoute)
app.use('/card',cardRoute)
app.use('/courses',coursesRoute)
})
.catch(err=>{
  console.error(err)
})












