// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'Enter project title.',
    name: 'title'
},

{
    type: 'input',
    message: 'Enter a description of your project.',
    name: 'description'
},

{
    type: 'input',
    message: 'Add instructions for installation.',
    name: 'installation'
},

{
    type: 'input',
    message: 'Add details on usage.',
    name: 'usage'
},

{
    type: 'input',
    message: 'Enter credits.',
    name: 'credits'
},

{
    type: 'list',
    message: 'Choose a license',
    choices: ['Apache License 2.0', 'MIT License'],
    name: 'license'
},

{
    type: 'input',
    message: 'Enter features.',
    name: 'features',
},

{
    type: 'input',
    message: 'Add details on how to contribute.',
    name: 'contribute',
},

{
    type: 'input',
    message: 'Add tests.',
    name: 'tests'
}
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, response) {

    let readMeContent = generateMarkdown(response);

    fs.writeFile(fileName, readMeContent, (err) => err ? console.error(err) : console.log('Success!'))

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            writeToFile('README.md', response)
        })
}

// Function call to initialize app
init();
