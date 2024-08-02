const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  questionId: String,
  title : String,
  description: String,
  sampleInputs: [[String]], // Array of arrays to handle multiple sets of sample inputs
  sampleOutputs: [[String]], // Array of arrays to handle multiple sets of sample outputs
  numberOfTestCases: Number,
  testCases: [
    {
      inputs: [String],  // Array of strings for multiple inputs in each test case
      outputs: [String],// Array of strings for multiple outputs in each test case 
    },
  ],
});
  const testSchema = new mongoose.Schema({
    customId: String,
    topic: String,
    
    questions: [questionSchema],
  });

  module.exports = mongoose.model('Test', testSchema);