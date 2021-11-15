'use-strict';

const chalk = require('chalk');
const validateProjectName = require('validate-npm-package-name');

// Source: https://github.com/facebook/create-react-app/blob/master/packages/create-react-app/createReactApp.js#L713
function checkAppName(name) {
  const validationResult = validateProjectName(name);
  if (!validationResult.validForNewPackages) {
    console.error(
      chalk.red(
        `Cannot create a project named ${chalk.green(
          `"${name}"`
        )} because of npm naming restrictions:\n`
      )
    );
    [
      ...(validationResult.errors || []),
      ...(validationResult.warnings || []),
    ].forEach(error => {
      console.error(chalk.red(`  * ${error}`));
    });
    console.error(chalk.red('\nPlease choose a different project name.'));
    process.exit(1);
  }
}

module.exports = {
  checkAppName,
}