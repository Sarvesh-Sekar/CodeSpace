const { c,cpp,python,java,node } = require('compile-run')
const  runFile = require('compile-run')
const runSource = require('compile-run')
const path = require('path')

const runC = async function(req, res, next)
{
    try{
        const run_c = await c.runFile(path.join(__dirname,'..','a.c'),{
            compilationPath : 'C:/MinGW/bin/gcc.exe'
        })
        const result_c= run_c.stdout
        return result_c
    }
    catch(err){
        console.log(err)
    }
    
}

async function runCpp()
{
    try{
        const run_cpp = await cpp.runFile(path.join(__dirname,'..','a.cpp'),{
            compilationPath:'C:/MinGW/bin/c++.exe'
        }) 
        const result_cpp= run_cpp.stdout
        return result_cpp
    }
    catch (err) {
        console.log(err)
    }
}

async function runPython()
{
    try{
        const run_python = await python.runFile(path.join(__dirname,'..','a.py'),{
            executionPath: 'C:/Users/sarve_71cseos/AppData/Local/Programs/Python/Python312/python.exe'
        })
        
         const result_python =  run_python.stdout
         
         return result_python
    }catch(err)
    
    {
        console.log(err)
    }
}

async function runJava()
{
    try{
        const run_java = await java.runFile(path.join(__dirname,'..','a.java'),{
            
            compilationPath:'C:/Program Files/Common Files/Oracle/Java/javapath/javac.exe',
            executionPath:'C:/Program Files/Common Files/Oracle/Java/javapath/java.exe'
        })
        const result_java =  run_java.stdout
        return result_java
    }catch(err)
    {
        console.log(err)
    }
}

async function runJs()
{
    try{
        const run_js = await node.runFile(path.join(__dirname,'..','a.js'),{
                   executionPath:'C:/Users/sarve_71cseos/node_modules/node/bin/node.exe'
        }) 
         const result_js=run_js.stdout
          return result_js
    }catch(err)
    {
        console.log(err)
    }
}

 runC()
// runCpp()
// runPython()
// runJava()
// runJs()
module.exports = {runC,runCpp,runPython,runJava,runJs}






