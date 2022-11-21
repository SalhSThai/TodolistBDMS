//=====================================================Imported Zone
const express = require('express');
const todoRoute = require('./routes/todoRoute')
const cors = require('cors');
const errFn = require('./middleweres/error');

//=====================================================constance & local imported Zone
const app = express();

const PORT = 8080;
//=====================================================Encoding Zone
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//=====================================================Route Zone
app.use('/todolist', todoRoute)
//=====================================================Throwing Zone
app.use(errFn);
//=====================================================Listening Zone
app.listen(PORT, () => { console.log(`PORT:[${PORT}] Server is running...`); });