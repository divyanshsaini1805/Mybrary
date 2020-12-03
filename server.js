if(process.env != "production")
{
    require('dotenv').config({path:'.env'});
}

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const indexRouter = require('./routes/index.js')


app.set('view engine','ejs')


app.set('views', __dirname + '/views')
app.set('layout','layouts/layout.ejs')
app.use(expressLayouts)
app.use('static',express.static('public'))


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://DIVYANSH:yl7GpHDqKD6WtB0c@cluster0.mvrxk.mongodb.net/mybrary?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL ,  { useNewUrlParser: true , useUnifiedTopology: true})


const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log("connected to mongoose"))



app.use('/',indexRouter)
app.listen(process.env.PORT || 80)

