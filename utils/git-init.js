// Code taken from Create React App's `react-script`
// https://github.com/facebook/create-react-app/blob/47e9e2c7a07bfe60b52011cf71de5ca33bdeb6e3/packages/react-scripts/scripts/init.js

'use-strict';

const path = require('path');
const fs = require('fs-extra');
const execSync = require('child_process').execSync;

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

/**
 *
 * @param {string} appPath git初始化路径
 * @param {string} name 项目名
 */
function tryGitInit(appPath, name) {
  let didInit = false;
  try {
    execSync('git --version', { cwd: appPath, stdio: 'ignore' });
    if (isInGitRepository()) {
      return false;
    }

    execSync('git init', { cwd: appPath, stdio: 'ignore' });
    didInit = true;

    execSync('git add -A', { cwd: appPath, stdio: 'ignore' });
    execSync('git commit -m "Init commit from Browser-extension-cli"', {
      cwd: appPath,
      stdio: 'ignore',
    });
  } catch (err) {
    if (didInit) {
      try {
        fs.removeSync(path.join(appPath, '.git'));
      } catch (removeErr) {
        // Ignore.
      }
    }
  }
}

module.exports = tryGitInit;
