
function renderLicenseBadge(license) {
  let enteredLicense = '';
  switch(license) {
    case 'BSD':
    enteredLicense = '![License: BSD](https://img.shields.io/badge/License-BSD-yellow.svg)';
    break;
    case 'MIT':
    enteredLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    break;
    case 'GPL':
    enteredLicense = '![License: GPL](https://img.shields.io/badge/License-GPL-yellow.svg)';
    break;
    default:
    enteredLicense = "N/A"
  }
  return enteredLicense;
};


function renderLicenseLink(license) {
  if (license != "") {
    return '\n* [license](#license)\n';
  } return ""; 
};

function renderLicenseSection(license) {
  let licenseBadge;
  if (license !== 'N/A') {
    return (
      licenseBadge
    )
  }
  return ''
}

function generateMarkdown(data) {
  const {title, description, installation, usage, credits, license, email} = data;
  const licenseImage = renderLicenseBadge(license);
  const licenseInfo = renderLicenseSection(license);
  const generateReadme = `# ${title}

${licenseImage}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

${licenseInfo}


## Email

${email}

`

return generateReadme;
}

module.exports = generateMarkdown;
