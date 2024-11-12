// index.js

// Importing necessary modules
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// Array of questions for user input
const questions = [
  {
    name: "start",
    type: "confirm",
    message: "Would you like to create a README?",
  },
  {
    name: "title",
    type: "input",
    message: "What is your project title? ",
  },
  {
    name: "description",
    type: "input",
    message:
      "Please write a description of your project.\nWhat was your motivation?\nWhy did you build this project?\nWhat problem does it solve?\nWhat did you learn?\nEnter your response here:\n",
  },
  {
    name: "installation",
    type: "editor",
    message:
      "What are the steps required to install your project?\nWrite each numbered step in the editor, then save and close the editor to submit your response.",
    transformer: (input) => {
      const steps = input
        // Split the input string into an array of lines
        .split("\n")
        // Map each line to a new line with numbering
        .map((step, index) => `${index + 1}. ${step}`);
      // Join the array of lines back into a string
      return steps.join("\n");
    },
  },
  {
    name: "usage",
    type: "editor",
    message:
      "Provide instructions and examples for use.\nAdd screenshots to the 'assets/images' folder.\nAdd screenshots to your READMEusing the following syntax: ![alt text](assets/images/screenshot.png).\nWrite each numbered step in the editor, then save and close the editor to submit your repsonse.",
    transformer: (input) => {
      const steps = input
        .split("\n")
        .map((step, index) => `${index + 1}. ${step}`);
      return steps.join("\n");
    },
  },
  {
    name: "contributing",
    type: "editor",
    message:
      "List your collaborators and third-party assets, if any, with links to their GitHub profiles.\nWrite this information with dashes in the editor, then save and close the editor to submit your response.",
    transformer: (input) => {
      const steps = input.split("\n").map((step) => `- ${step}`);
      return steps.join("\n");
    },
  },
  {
    name: "tests",
    type: "editor",
    message:
      "Provide instructions and examples for testing your project.\nWrite each numbered step in the editor, then save and close the editor to submit your response.",
    transformer: (input) => {
      const steps = input
        .split("\n")
        .map((step, index) => `${index + 1}. ${step}`);
      return steps.join("\n");
    },
  },
  {
    name: "license",
    type: "list",
    message: "Select the license for your project.",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    name: "github",
    type: "input",
    message: "Enter your GitHub username",
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email address",
  },
];

// Function to initialize the app
// Prompts the user for input and generates a README file
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile("README-generated.md", data);
    })
    .catch((err) => {
      console.error(err);
    });
}

/**
 * Function to write the README file
 * Generates the markdown content using generateMarkdown function and writes it to the file
 * fileName: the name of the file to be created
 * data: an object containing the user input
 */
function writeToFile(fileName, data) {
  const markdownContent = generateMarkdown(data);
  fs.writeFile(fileName, markdownContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} created successfully!`);
    }
  });
}

// Function call to initialize the app
init();