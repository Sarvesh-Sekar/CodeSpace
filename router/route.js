const express = require('express')
const router = express.Router()
const path = require('path')
const { c , cpp , python ,java ,node} = require('compile-run')
const {runC, runCpp, runPython, runJava, runJs} = require('../Controller/compile');
const createfile = require('../Controller/file')
const testcase = require('../Controller/testcase')
const processInput = require('../Controller/testcase')




router.get('/a.cpp',runCpp);
router.get('/a.py',runPython);
router.get('/a.js',runJs);
router.get('/a.java',runJava);

router.post('/run', async (req, res) => {
    let name;
    let ext;
    let content;
    let test;
    let input;
    let overall_result = ""; 
    try {
        name = req.body.name;
        ext = req.body.ext;
        content = req.body.content;
        input = req.body.input; 
        test = req.body.test; 

        await createfile(name, ext, content);

        let result;
        let test_result = false; 

        const processInput = async (runFunction) => {
            for (let i = 0; i < input.length; i++) {
                const currentInput = String(input[i]);
                result = await runFunction(name, ext, currentInput);
                result = result.replace(/\r?\n|\r/g, "");
                const expectedOutput = String(test[i]).replace(/\r?\n|\r/g, "");
                if (result === expectedOutput) {
                    overall_result += `Test Case ${i + 1} passed\n`;
                } else {
                    overall_result += `Test Case ${i + 1} failed\n`;
                }
            }
        };

        if (ext === '.c') {
            await processInput(runC);
        } else if (ext === '.cpp') {
            await processInput(runCpp);
        } else if (ext === '.py') {
            await processInput(runPython);
        } else if (ext === '.java') {
            await processInput(runJava);
        } else if (ext === '.js') {
            await processInput(runJs);
        } else {
            throw new Error('Unsupported file extension');
        }

        console.log('Test Result:', test_result);
        console.log('Type of Test:', typeof test);
        console.log('Type of Result:', typeof result);
        console.log('Test Value:', JSON.stringify(test));
        console.log('Result Value:', JSON.stringify(result));

        res.status(201).send(overall_result);
    } catch (error) {
        console.error(error);
        res.status(500).send(`An error occurred: ${error.message}`);
    }
});







module.exports = router;



