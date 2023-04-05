const express=require('express');
const app=express();
const path=require('path')
const ejsmate=require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const rootRoute=require('./router/root')

mongoose.connect('mongodb://127.0.0.1:27017/testing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // strictQuery:true
    // useCreateIndex:true
    // useFindAndModify:true
});
const db = mongoose.Connection;
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once("open", () => {
    console.log('Database Connected');
});

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('ejs',ejsmate);
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json()) // for parsing application/json
app.use(methodOverride('_method'))









app.use('/',rootRoute);


app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})