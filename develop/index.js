// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

let answers = {};
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type:'input',
        name: 'installation',
        message: 'What are the installion instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Selected any licenses that your application is covered under.',
        choices: ['BSD', 'MIT', 'GPL']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    }
];

const createReadme = questions => {
    inquirer.prompt(questions).then(answers => {
        questionAnswers = generateMarkdown(answers);
        writeToFile("README.md", questionAnswers);
        });
}

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log('ERROR:');
        }
    
        console.log('Sucess!');
    });
};

const init = () => {
    createReadme(questions);
}

init();

