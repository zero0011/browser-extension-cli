'use strict';

const fs = require('fs-extra');
const path = require('path');

function generateReadme(appPath) {
  fs.writeFileSync(path.join(appPath, 'README.md'));

  return true;
}

module.exports = generateReadme;
