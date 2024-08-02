const { c,cpp,python,java,node } = require('compile-run')
const  runFile = require('compile-run')
const runSource = require('compile-run')
const path = require('path')

const runC = async (name, ext,input) => {
    try {
        const filepath = path.join(__dirname,'..','files',`${name}${ext}`);
        const run_c = await c.runFile(filepath, {
            compilationPath: 'C:/MinGW/bin/gcc.exe',
            stdin:input
           
        });
        const result_c = run_c.stdout || run_c.stderr;
        console.log(run_c.stdout);
        console.log(filepath)
        return result_c;
    } catch (err) {
        console.log(err);
        throw err; // Rethrow the error to be caught in the outer try...catch
    }
};

const  runCpp= async(name,ext,input)=>
{
    try{
        const filepath = path.join(__dirname,'..','files',`${name}${ext}`);
        const run_cpp = await cpp.runFile(filepath,{
            compilationPath:'C:/MinGW/bin/c++.exe',
            stdin:input
        }) 
        const result_cpp= run_cpp.stdout || run_cpp.stderr
        return result_cpp
    }
    catch (err) {
        console.log(err)
    }
}

const runPython=async(name,ext,input)=>
{
    try{
        const filepath = path.join(__dirname,'..','files',`${name}${ext}`);
        const run_python = await python.runFile(filepath,{
            executionPath: 'C:/Users/sarve_71cseos/AppData/Local/Programs/Python/Python312/python.exe',
            stdin:input
        },
    )
        
         const result_python =  run_python.stdout|| run_python.stderr;
         return result_python
         
        
    }catch(err)
    
    {
        console.log(err)
    }
}

const runJava = async (name, ext,input) => {
    let result_java;
    try {
        const filepath = path.join(__dirname, '..', 'files', `${name}${ext}`);
        const run_java = await java.runFile(filepath, {
            compilationPath: 'C:/Program Files/Common Files/Oracle/Java/javapath/javac.exe',
            executionPath: 'C:/Program Files/Common Files/Oracle/Java/javapath/java.exe',
            stdin:input
        });

        result_java = run_java.stdout||run_java.stderr;
    } catch (err) {
        result_java = err.stderr || err.message; // Return standard error or error message
        
    }
    return result_java;
};

const runJs = async(name,ext,input)=>
{
    try{
        const filepath = path.join(__dirname,'..','files',`${name}${ext}`);
        const run_js = await node.runFile(filepath,{
                   executionPath:'C:/Users/sarve_71cseos/node_modules/node/bin/node.exe',
                   stdin:input
        }) 
         const result_js=run_js.stdout||run_js.stderr
        return result_js
    }catch(err)
    {
        console.log(err)
    }
}


module.exports = {runC,runCpp,runPython,runJava,runJs}






