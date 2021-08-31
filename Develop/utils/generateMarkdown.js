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
  * [Description](https://github.com/${data.github}/${data.repo}#description)
  * [Installation](https://github.com/${data.github}/${data.repo}#installation)
  * [Usage](https://github.com/${data.github}/${data.repo}#usage)
  * [License](https://github.com/${data.github}/${data.repo}#license)
  * [Contributing](https://github.com/${data.github}/${data.repo}#contributing)
  * [Tests](https://github.com/${data.github}/${data.repo}#tests)
  * [Questions](https://github.com/${data.github}/${data.repo}#questions)

  ## Description
   ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License  
    This application is covered under the ${data.license} license.
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
