const express = require('express');
const { c , python , cpp , node , java } = require('compile-run')
const runFile = require('compile-run')
const runSource = require('compile-run')
const app = express();
const {runC,runCpp,runPython,runJava,runJs} = require('./Controller/compile')



const path = require('path')
const PORT = process.env.PORT || 3000;
const router = require('./router/route')

app.use(express.json())


app.use(require('./router/route'))



app.listen(PORT,()=>
{
    console.log(`Server running on Port ${PORT}`)
})