//app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const todoRouter = require("./routes/todos.route"); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url = "mongodb://localhost:27017/todos"; //????????????????????????????
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//callback, arguments, qwery params

app.use("/todos", todoRouter);
let port = 1234;

app.listen(port, () => {
	console.log("Server is up and running on port numner " + port);
});

// bad practice
// app.use('/products/test1', () => {})
// app.use('/products/test2', () => {})
// app.use('/products/test3', () => {})
// app.use('/products/test4', () => {})
// app.use('/products/test5', () => {})
// app.get('/products/', () => {})
// app.get('/products/:id', () => {})
// app.post('/products/', () => {})
// app.put('/products/:id', () => {})
// app.delete('/products/:id', () => {})

// const productsRouter = () => {

// }
// // best practice
// app.use('/products', productsRouter)

// app.use("/", (req, res, next) => {
//     console.log(req)
//     // res.send('ok')
//     next();
// }, (req, res, next) => {
//     console.log(2)
//     res.send('22')
// })

// const express = require('express');
// const bodyParser = require('body-parser');
// const product = require('./routes/product.route'); // Imports routes for the products
// const app = express();

// Set up mongoose connection
// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://localhost:27017/todos';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use('/products', product);

// let port = 1234;

// app.listen(port, () => {
//     console.log('Server is up and running on port numner ' + port);
// });

// let MongoClient = require("mongodb").MongoClient;
// let db;

// MongoClient.connect ("mongodb")
// if (err) {
// return console.log(err);
// }
// db = database;
// app.listen(3012,function () {
// console.log("API app started");
// })
