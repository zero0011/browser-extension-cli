'use strict';

const fs = require('fs-extra');
const path = require('path');

function generateReadme(appPath, name) {

  const readme = `
  # Browser-extension-cli

  1. cd ${name}

  2. Run npm run watch

  3. Open chrome://extensions

  4. Check the Developer mode checkbox

  5. Click on the Load unpacked extension button

  6. Select the folder dist/build
  
  `

  fs.writeFileSync(path.join(appPath, 'README.md'), readme);

  return true;
}

module.exports = generateReadme;
