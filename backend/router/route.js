const express = require('express')
const router = express.Router()
const path = require('path')
const { c , cpp , python ,java ,node} = require('compile-run')
const {runC, runCpp, runPython, runJava, runJs} = require('../Controller/compile');

const  runFile = require('compile-run')
const runSource = require('compile-run')
const createfile = require('../Controller/file')
const testcase = require('../Controller/testcase')
const processInput = require('../Controller/testcase')




router.get('/a.cpp',runCpp);
router.get('/a.py',runPython);
router.get('/a.js',runJs);
router.get('/a.java',runJava);

router.post('/create', async (req, res) => {
    const { language, code, fileName,input } = req.body;

    try {
        await createfile(fileName, language, code);

        let result;
        switch (language) {
            case '.c':
                result = await runC(fileName, language,input);
                break;
            case '.cpp':
                result = await runCpp(fileName, language,input);
                break;
            case '.py':
                result = await runPython(fileName, language,input);
                break;
            case '.java':
                result = await runJava(fileName, language,input);
                break;
            case '.js':
                result = await runJs(fileName, language,input);
                break;
            default:
                return res.status(400).send('Unsupported language');
        }

        res.send(result);
    } catch (error) {
        console.error('Error creating or running file:', error);
        res.sendStatus(500);
    }
});

module.exports = router;


    










