module.exports = {

    questions: [
        {
            type: 'input',
            message: 'What is the Title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Provide a Description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Add a Table of Contents.',
            name: 'table',
        },
        {
            type: 'input',
            message: 'What are the steps required to Install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for Use.',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Provide a list of Licenses.',
            name: 'license',
            choices: ['MIT','BSD','The Unlicense']

        },
        {
            type: 'input',
            message: 'List your Contributors.',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Provide examples on how to run Tests for your project.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Add a Questions section.',
            name: 'questions',
        },
    ]

}