// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./Develop/utils/generateMarkdown');
const renderLicenseBadge = require('./Develop/utils/generateMarkdown')
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
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of the Github repo for your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['Apache 2.0', 'GNU GPL v3', 'Boost 1.0', 'MIT']
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
        // console.log(answers);
        // renderLicenseBadge(answers);
        writeToFile('README.md', markDown(answers));
    })
    
 }

// Function call to initialize app
init();

