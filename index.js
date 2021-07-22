const inquirer = require('inquirer');
const fs = require('fs');
const {questions} = require('./questions');
const {userLicense} = require('./userLicense');
const {promisify} = require('util');
const {generateMarkdown} = require('./generateMarkdown');
const writeFileAsync = promisify(fs.writeFile);


const getUserInput = () => {
    return inquirer.prompt(questions)
    .then(data => generateMarkdown(data))
    .then(README => writeFileAsync('./README.md', README));
    };

    getUserInput();












