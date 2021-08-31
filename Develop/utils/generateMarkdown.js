// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  * Description
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

  ## Description
   ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License  

  ## Contributing
    ${data.contributing}

  ## Tests
    ${data.tests}

  ## Questions
  Click here to see ${data.github}'s page! https://github.com/${data.github}  
  Have any questions? Feel free to email me at ${data.email} and I will gladly answer you as soon as I can!
`;
}

module.exports = generateMarkdown;
