// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Array of questions for user input
const questions = [
    {   
        type: "input",
        message: "What is the name of the project?",
        name: "title",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {  
        type: "input",
        message: "Please provide a description of the project",
        name: "description",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {   
        type: "input",
        message: "What is the name of the user?",
        name: "userName",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {   
        type: "input",
        message: "Who are the contributors to this project?",
        name: "contribution",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please name the contributers to the project");
            }
            return true;
        }
    },
    {   
        type: "input",
        message: "What is the user github email address?",
        name: "email",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid gthub email is required");
            }
            return true;
        }
    },
    {   
        type: "list",
        message: "What licenses are required with this project?",
        name: "license",
        default: "",
        choices: ["", "Apache", "MIT", "Boost", "BSD", "Eclipse", "GNU", "IBM"]
    },
    {   
        type: "input",
        message: "What is the installation process?",
        name: "installation"
    },
    {   
        type: "input",
        message: "How will this application be used?",
        name: "usage"
    },
    {   
        type: "input",
        message: "What is the test process for this project?",
        name: "test"
    },
    {   
        type: "input",
        message: "What do I do if I have an issue?",
        name: "issues"
    },
];

const init = questions => {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('Readme.md', generateMarkdown(answers))
        // console.log(answers);
    })
    .catch((err) => {
        console.log(err);
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let filePathName =  path.join(process.cwd(), fileName);
    // console.log(filePathName, data);
    console.log(fileName, data);
    fs.writeFile(filePathName, data, (err) => {
        if(err) {
            throw err;
        } else {
            console.log('Succefull write to file');
        }
    });

};

// Function call to initialize app
init(questions);