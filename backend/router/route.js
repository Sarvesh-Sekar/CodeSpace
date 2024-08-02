const express = require('express')
const router = express.Router()
const path = require('path')
const { c , cpp , python ,java ,node} = require('compile-run')
const Test = require('../models/model')
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


const generateCustomId = (prefix, number, isQuestion = false) => {
    const paddedNumber = number.toString().padStart(4, '0');
    if (isQuestion) {
      return `${prefix}PB${paddedNumber}`;
    }
    return `${prefix}${paddedNumber}`;
  };
  
  
  router.post('/tests', async (req, res) => {
    const { topic, questions } = req.body;

    try {
        const topicPrefix = topic.substring(0, 2).toUpperCase();
        const topicId = generateCustomId(topicPrefix, 1); // Generating the custom ID for the topic

        // Generate unique IDs for each question
        const updatedQuestions = questions.map((question, index) => {
            const questionId = generateCustomId(topicPrefix, index + 1, true);
            return { ...question, questionId };
        });

        const newTest = new Test({ customId: topicId, topic, questions: updatedQuestions });
        await newTest.save();
        res.status(201).send({ success: true }); // Send a proper JSON response
    } catch (error) {
        console.error('Error saving test:', error); // Log the error for debugging
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.get('/api/tests', async (req, res) => {
    try {
      const tests = await Test.find();
      if (tests.length > 0) {
        res.json(tests);
      } else {
        res.status(404).json({ message: 'No tests found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tests', error });
    }
  });
  
  router.get('/api/tests/:customId/questions', async (req, res) => {
    const { customId } = req.params;
  
    try {
      const test = await Test.findOne({ customId }).populate('questions');
      if (test) {
        res.json(test.questions);
      } else {
        res.status(404).json({ message: 'Test not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching questions', error });
    }
  });
  
module.exports = router;


    










