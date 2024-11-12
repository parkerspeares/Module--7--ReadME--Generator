// utils/generateMarkdown.js

/**
 * Function to render the license section based on the selected license
 * license: the selected license
 * return: the rendered license section
 */
function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    } else if (license === "Apache") {
      return "[![License: Apache v2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    } else if (license === "GPL") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    } else {
      return "";
    }
  }
  
  /**
   * Function to render the license link based on the selected license.
   * license: the selected license
   * return: the rendered license link
   */
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return "(https://opensource.org/licenses/MIT)";
    } else if (license === "Apache") {
      return "(https://opensource.org/license/apache-2-0)";
    } else if (license === "GPL") {
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    } else {
      return "";
    }
  }
  
  // Function to render the license section based on the selected license
  function renderLicenseSection(license) {
    if (license === "MIT") {
      return "This project is licensed under the MIT license.";
    } else if (license === "Apache") {
      return "This project is licensed under the Apache license.";
    } else if (license === "GPL") {
      return "This project is licensed under the GNU license.";
    } else {
      return "";
    }
  }
  /**
   * Function to generate the Markdown content for the README file
   * data: an object containing the user input
   * return: the generated markdown content
   */
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
  
    return `
  ${licenseBadge}${renderLicenseLink(data.license)}
  
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  
  ## Questions
  
  }
  
  // Export the generateMarkdown function for use in other modules
  export default generateMarkdown;