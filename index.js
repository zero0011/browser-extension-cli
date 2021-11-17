#!/usr/bin/env node

"use strict";

const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const spawn = require("cross-spawn");
const commander = require("commander");

const packageFile = require("./package.json");
const { checkAppName } = require("./utils/name");

let projectName;

const program = new commander.Command(packageFile.name)
  .version(packageFile.version)
  .arguments("<project-directory>")
  .usage(`${chalk.green("<project-directory>")} [options]`)
  .action((name) => {
    projectName = name;
  })
  .option("-default", "Create project with Dom")
  .option("-react", "Create project with react")
  .option("-vue", "Create project with vue")
  .on("--help", () => {
    console.log(`    Only ${chalk.green("<projectName>")} is required.`);
  })
  .parse(process.argv);

// Exit from the process if no project name is provided
if (typeof projectName === "undefined") {
  console.error("Please specify the project directory:");
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green("<projectName>")}`
  );
  console.log();
  console.log("For example:");
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green("my-extension")}`);
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

  const appDetails = {
    version: "0.0.1",
    description: "My Browser Extension",
    main: "index.js",
  };

  // Setup the package file
  let appPackage = Object.assign(
    {},
    {
      name: name,
    },
    appDetails,
    {
      private: true,
    }
  );

  appPackage.scripts = {
    watch:
      "webpack --mode=development --watch --config config/webpack.config.js",
    build: "webpack --mode=production --config config/webpack.config.js",
    clean: "rm -rf dist",
    test: "npx jest",
    style: 'prettier --write "index.js"',
  };

  appPackage.repository = {
    type: "git",
    url: "https://github.com/zero0011/browser-extension-cli",
  };

  // Create package file in project directory
  fs.writeFileSync(
    path.join(root, "package.json"),
    JSON.stringify(appPackage, null, 2)
  );

  let command = "npm";
  let argsDev = ["install", "--save-dev"];

  // Add devDependencies
  argsDev.push(
    "webpack@^4.0.0",
    "webpack-cli@^3.0.0",
    "webpack-merge@^5.0.0",
    "copy-webpack-plugin@^6.0.0",
    "size-plugin@^2.0.0",
    "mini-css-extract-plugin@^0.10.0",
    "css-loader@^4.0.0",
    "file-loader@^6.0.0",
    "jest",
    "ts-jest",
    "ts-loader",
    "typescript",
    "prettier"
  );

  let args = ["install", "--save"];

  // Add dependencies
  args.push("react", "react-dom");

  console.log("Installing packages. This might take a couple of minutes.");
  console.log(
    `Installing ${chalk.cyan("webpack")}, ${chalk.cyan(
      "webpack-cli"
    )} and few more...`
  );
  console.log();

  // Install package devDependencies
  const procDev = spawn.sync(command, argsDev, { cwd: root, stdio: "inherit" });
  if (procDev.status !== 0) {
    console.error(`\`${command} ${argsDev.join(" ")}\` failed`);
    return;
  }

  // Install package dependencies
  const proc = spawn.sync(command, args, { cwd: root, stdio: "inherit" });
  if (proc.status !== 0) {
    console.error(`\`${command} ${args.join(" ")}\` failed`);
    return;
  }
}

createExtension(projectName);
