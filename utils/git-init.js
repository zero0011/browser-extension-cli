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
        // TODO:暂未完成 git 初始化函数
    } catch (err) {
        // Ignore.
    }
}

module.exports = tryGitInit;
