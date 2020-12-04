if(process.env.NODE_ENV !== "production")
{
    require('dotenv').config({path:'.env'});
}

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const indexRouter = require('./routes/index.js')
const expressfavicon = require('express-favicon')

app.set('view engine','ejs')


app.set('views', __dirname + '/views')
app.set('layout','layouts/layout.ejs')
app.use(expressLayouts)
app.use('static',express.static('public'))




//DATABASE_URL = mongodb://localhost/mybrary

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL ,  { useNewUrlParser: true , useUnifiedTopology: true})


const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log("connected to mongoose"))

//ZiJX8yWfILBxp3bq

app.use('/',indexRouter)
app.listen(process.env.PORT || 80)

