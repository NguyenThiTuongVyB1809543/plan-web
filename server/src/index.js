const path = require('path');
const express = require('express');//khai baos thư viện 
const app = express();//mọi thứ đổ vào đây để chạy
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const port =  3500; //set port

const db = require('./config/db');
//Http bloger
app.use(morgan('combined'));

//templete engin
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('Path: ', path.join(__dirname, 'resources/views'));


db.connect();


app.get( '/', (req, res) => res.render(
    'home'
)); //dùng phương thức get, / là url
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
//app.listen lắng nghe port, 
