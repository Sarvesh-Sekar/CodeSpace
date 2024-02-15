const express = require('express');
const { c , python , cpp , node , java } = require('compile-run')
const runFile = require('compile-run')
const runSource = require('compile-run')
const app = express();
const runJs = require('./Controller/compile')
const path = require('path')
const PORT = process.env.PORT || 3000;
const router = require('./Controller/route');





app.use('/',router)

app.listen(PORT,()=>
{
    console.log(`Server running on Port ${PORT}`)
})