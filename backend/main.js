const express = require('express');
const { c , python , cpp , node , java } = require('compile-run')
const runFile = require('compile-run')
const runSource = require('compile-run')
const app = express();
const {runC,runCpp,runPython,runJava,runJs} = require('./Controller/compile')
const Test = require('./models/model')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/testDB');

const cors = require('cors');
app.use(cors());


const path = require('path')
const PORT = process.env.PORT || 3500;
const router = require('./router/route')

app.use(express.json())


app.use(require('./router/route'))



app.listen(PORT,()=>
{
    console.log(`Server running on Port ${PORT}`)
})