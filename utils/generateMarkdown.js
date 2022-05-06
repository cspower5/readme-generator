

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const license = {
    MIT:     '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache:  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost:   '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    BSD:     '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    Eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    GNU:     '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    IBM:     '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  };

  if (license) {
    return license[license];
  }else {
    return;
  };

};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const badge = {
    MIT:     '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache:  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost:   '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    BSD:     '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    Eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    GNU:     '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    IBM:     '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  };

  if (license) {
    return license[badge];
  }else {
    return;
  }; 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {



  let tableOfContents = `# Table of Content
  - [descriptions](#description)
  - [username](#username)
  - [github](#github)
  `;

  if (license[data]) {
    tableOfContents += ` \n- [licenses](#license)`
  }
  if (data.installation) {
    tableOfContents += ` \n- [installation](#installation)`
  }
  if (data.usage) {
    tableOfContents += ` \n- [usage](#usage)`
  }
  if (data.contribution) {
    tableOfContents += ` \n- [contribution](#contribution)`
  }
  if (data.test) {
    tableOfContents += ` \n- [test](#Testing)`
  }

  return `
<h1 align="center">${data.title}</h1>

${license[data.license]}

# description:
  ${data.description}

  ${tableOfContents }

## username:
https://github.com/${data.userName}

## github
${data.repo}

## installation:
${data.installation}

## usage:
${data.usage} 

## contributions made by:
${data.contribution}

## Testing:
${data.test}

## What to do about application issues:
${data.issues}

## email:
${data.email}
`;
}
module.exports = generateMarkdown;
