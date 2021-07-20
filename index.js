const inquirer = require('inquirer');
const fs = require('fs');
const {promisify} = require('util');
const writeFileAsync = promisify(fs.writeFile);

const {generateMarkdown} = require('./generateMarkdown');

const {questions} = require('./questions');

const getUserInput = () => {
    return inquirer.prompt(questions)
    .then(answers => generateMarkdown(answers))
    .then(README => writeFileAsync('./README.md', README));
    };

    getUserInput();












