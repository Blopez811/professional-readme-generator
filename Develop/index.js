// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your README?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and samples for use of your project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are some examples of tests you have written for this application, and how do you run them?'
    }
];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully");
            console.log(data);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    
    .then((answers) => {
        console.log(answers);
        writeToFile('README.md', markDown(answers));
    })
    
 }

// Function call to initialize app
init();

