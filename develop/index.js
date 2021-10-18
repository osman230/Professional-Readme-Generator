// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const generatePage = require('./readme.js');
// const profileDataArgs = process.argv.slice(2);

// // const [name, github] = profileDataArgs;
// // // console.log(name, github);

// // const pageHTML = generatePage(name, github);
// // TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project-title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your project?',
    },
    {
        type:'input',
        name: 'Installation',
        message: 'What are the installion instructions for your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Who contributed to this project?',
    },
    {
        type: 'checkbox',
        name: 'License',
        message: 'Selected any licenses that your application is covered under.',
        choices: ['BSD', 'MIT', 'GPL']
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please provide your github username and a link to your github profile'
    },
    {
        type: 'input',
        name: 'Questions2',
        message: 'Please provide your email address.'
    }
];
inquirer.prompt(questions).then(

(function(data) {
// TODO: Create a function to write README file


fs.writeFile('README.md', JSON.stringify(data, null, '\t'), function(err) {
if (err) {
  return console.log(err);
}

console.log('Success!');
});

// TODO: Create a function to initialize app
const init = () => {
    questions;
}


// Function call to initialize app
init();

}));

