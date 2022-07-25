const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log } = require('console');
const dotenv = require('dotenv').config();
const studentRoute = require('./routes/students');

const app = express();
const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/student', studentRoute);

mongoose.connect(URL, ()=>{
    console.log('MongoDB Connected!');
});

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}.`);
})