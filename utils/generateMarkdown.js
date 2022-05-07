

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//${license[data.license]}
function renderLicenseBadge(license) {
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
      return badge[license];
    }else {
      return '';
  };
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const type = {
    MIT:     '(https://opensource.org/licenses/MIT)',
    Apache:  '(https://opensource.org/licenses/Apache-2.0)',
    Boost:   '(https://www.boost.org/LICENSE_1_0.txt)',
    BSD:     '(https://opensource.org/licenses/BSD-3-Clause)',
    Eclipse: '(https://opensource.org/licenses/EPL-1.0)',
    GNU:     '(https://www.gnu.org/licenses/gpl-3.0)',
    IBM:     '(https://opensource.org/licenses/IPL-1.0)'
  };

  if (license) {
    console.log(type[license])
    return type[license];
  }else {
    return false;
  }; 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if(license){
//     return '## license';
//   }else {
//     return '';
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let tableOfContents = `# Table of Content
  - [descriptions](#description)
  - [username](#username)
  - [github](#github)
  - [email](#email)
  `;

  //Add only the labels to table of Contents that have been selected.
  // if (data.license) {
  //   tableOfContents += ` \n- [licenses](#license)`
  // };
  if (data.installation) {
    tableOfContents += ` \n- [Installation](#Installation)`
  };
  if (data.usage) {
    tableOfContents += ` \n- [Usage](#Usage)`
  };
  if (data.contribution) {
    tableOfContents += ` \n- [Contributions](#Contributions)`
  };
  if (data.test) {
    tableOfContents += ` \n- [Testing](#Testing)`
  };
  if (data.issues) {
    tableOfContents += ` \n- [Issues](#Issues)`
  };
  
  //add only the labels to section that have been selected.
  let section = `# description:
  ${data.description}

  ${tableOfContents}

## username:
https://github.com/${data.userName}

## github
${data.repo}

## email
${data.email}
`;
console.log(renderLicenseLink(data.license))
if(renderLicenseLink(data.license)) {
  section += ` ## License
  ${data.license}
  ${renderLicenseLink(data.license)}
  `
};
if(data.installation) {
    section += ` ## Installation
    ${data.installation}
    `
};
if(data.usage) {
    section += ` ## Usage
    ${data.usage}
    `
};
if(data.contribution) {
    section += ` ## Contributions
    ${data.contribution}
    `
};
 if(data.test) {
    section += ` ## Testing
    ${data.test}
    `
};
if(data.issues) {
    section += ` ## Issues
    ${data.issues}
    `
};

  return `
<h1 align="center">${data.title}</h1>

${renderLicenseBadge(data.license)}

${section}
`;
}
module.exports = generateMarkdown;
