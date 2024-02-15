const express = require('express')
const router = express.Router()
const path = require('path')
const { c , cpp , python ,java ,node} = require('compile-run')



router.get('^$|/a.c',async(req,res)=>
{
    try{
        const run_c = await c.runFile(path.join(__dirname,'..','a.c'),{
            compilationPath : 'C:/MinGW/bin/gcc.exe'
        })
        if(run_c.stdout.length === 0) res.send(run_c.stderr)
        else res.send(run_c.stdout) 
    }
    catch(err){
        console.log(err)
    }
})
router.get('^$|/a.cpp',async(req,res)=>
{
    try{
        const run_cpp = await cpp.runFile(path.join(__dirname,'..','a.cpp'),{
            compilationPath:'C:/MinGW/bin/c++.exe'
        }) 
        if (run_cpp.stdout.length===0) res.send(run_cpp.stderr)
        else res.send(run_cpp.stdout)   
       
    }
    catch (err) {
        console.log(err)
    }
})
router.get('^$|/a.py',async(req,res)=>
{
    try{
        const run_python = await python.runFile(path.join(__dirname,'..','a.py'),{
            executionPath: 'C:/Users/sarve_71cseos/AppData/Local/Programs/Python/Python312/python.exe'
        })
         if (run_python.stdout.length === 0) res.sendStatus(401).send(run_python.stderr)
         else res.send(run_python.stdout)
    }catch(err)
    {
        console.log(err)
    }
})
router.get('^$|/a.java',async(req,res)=>
{
    try{
        const run_java = await java.runFile(path.join(__dirname,'..','a.java'),{
            
            compilationPath:'C:/Program Files/Common Files/Oracle/Java/javapath/javac.exe',
            executionPath:'C:/Program Files/Common Files/Oracle/Java/javapath/java.exe'
        })

        if (run_java.stdout.length === 0)res.send(run_java.stderr)
        else res.send(run_java.stdout)
        
    }catch(err)
    {
        console.log(err)
    }
})
router.get('^$|/a.js',async(req,res)=>
{
    try{
        const run_js = await node.runFile(path.join(__dirname,'..','a.js'),{
                   executionPath:'C:/Users/sarve_71cseos/node_modules/node/bin/node.exe'
        }) 
        if (run_js.stdout.length===0) res.send(run_js.stderr)
        else res.send(run_js.stdout)
          
    }catch(err)
    {
        console.log(err)
    }
})


module.exports = router;



