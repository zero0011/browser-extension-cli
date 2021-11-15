#!/usr/bin/env node


"use strict";

const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const commander = require('commander');

const packageFile = require('./package.json');
const { checkAppName } = require('./utils/name');

let projectName;

const program = new commander.Command(packageFile.name)
  .version(packageFile.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action((name) => {
    projectName = name;
  })
  .option('-default', 'Create project with Dom')
  .option('-react', 'Create project with react')
  .option('-vue', 'Create project with vue')
  .on('--help', () => {
    console.log(`    Only ${chalk.green('<projectName>')} is required.`);
  })
  .parse(process.argv);


// Exit from the process if no project name is provided
if (typeof projectName === 'undefined') {
  console.error('Please specify the project directory:');
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<projectName>')}`
  );
  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-extension')}`);
  console.log();
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  );
  process.exit(1);
}

// TODO:创建脚手架函数
function createExtension(name) {
  const root = path.resolve(name);

  checkAppName(name);
  fs.ensureDirSync(name);

  console.log(`Create a new Chrome extension in ${chalk.green(root)}`);
  console.log();

  
}




createExtension(projectName);