const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require('express');
dotenv.config({ path: "./config.env" })
const app = express()
const port = process.env.PORT;
require("./db/conn")

//const User=require("./model/userSchema");
app.use(express.json())
//routerfiles
/app.use(require("./router/auth"))
//middleware
const middleware = (req, res, next) => {

    console.log(`Hello middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send('Hello World app.js!')
})
app.get('/about', middleware, (req, res) => {
    res.send('Hello about World app.js!')
})
app.get('/contact', middleware, (req, res) => {
    res.send('Hello contact World app.js!')
})
app.get('/register', middleware, (req, res) => {
    res.send('Hello register app.js')
})
app.get('/signin', (req, res) => {
    res.send('Hello login app.js')
})
app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})