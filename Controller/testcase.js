const {runC,runCpp,runPython,runJava,runJs} = require('../Controller/compile')

const testcase = (test1,data)=>
    {
       if(test1===data) return true
       else return false
    }

    const processInput = async (runFunction,name,ext) => {
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


    module.exports = {testcase,processInput}