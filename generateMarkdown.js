function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}


function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`
  }
  return '';
}


function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`
  }
  return '';
}



module.exports = {
  generateMarkdown: (data) => {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`
  }
}

