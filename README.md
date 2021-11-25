# browser-extension-cli

Browser plug-in development framework.and The CLI support you devlop Broswer Extension by React or Vue

# Quick Overview

```sh
npm install -g browser-extension-cli
browser-extension-cli project-directory
```

# todolist

-   [x] 初始化项目
-   [x] 支持 eslint 代码规范
-   [x] 支持 prettierrc 格式化代码
-   [] 支持原生 html,css,js 开发浏览器插件
-   [] 支持使用 React 开发浏览器插件
    -   [] 支持使用命令 options 设置 React 开发
-   [] 支持使用 Vue 开发浏览器插件
    -   [] 支持使用命令 options 设置 Vue 开发
-   [] 支持自动化测试此脚手架

# Bugs

-   [x] 无法支持传递空项目名,报错提示用户需要一个合适的项目名称
-   [] 读取 readme.md 文件报错
-   [] 如何支持使用 react 开发一个项目

# Q&A

## 1. 如何在项目中支持 React 框架的应用开发？为什么配置了 webpack 但是没有效果？

ts-loader, 支持使用 tsx 来开发项目

## 2. #!/usr/bin/env node 的作用是什么？

在写 npm 包的时候须要在脚本的第一行写上#!/usr/bin/env node ，用于指明该脚本文件要使用 node 来执行。node

/usr/bin/env 用来告诉用户到 path 目录下去寻找 node，#!/usr/bin/env node 可让系统动态的去查找 node，已解决不一样机器不一样用户设置不一致问题。web

PS： 该命令必须放在第一行， 否者不会生效 n

## 3. child_process Node 模块如何使用 ？

child_process 中 execSync API 并没有效果。
有效果,只不过把 stdio(标准输入输出) 设置为 ignore,所以看出什么效果

## 4. 如何支持 eslint 代码规范 ？

配置 .eslintrc 文件

## 5. 如何更改代码时，自动使用 eslint 格式化代码 ？

无需使用整体的代码规范， 那样会对系统整个项目 读取，格式化，再输出。对于本地开发环境消耗太大。

lint-staged 只需要对变更的文件进行处理。

需要使用到的工具

-   eslint 代码检查
-   prettier 代码标准化
-   husky git 每步操作的钩子，没执行一个操作都会执行一次对应的钩子函数，执行 pre-commit 操作时，执行 Prettier 格式化脚本，即可自动的格式化代码，让 commit 之后的代码都符合 Prettier 规范。
-   lint-staged 只需要对变更的文件进行处理。git 暂存文件

### 配置文件说明

eslint 支持几种配置文件

-   js - 使用 .eslintrc.js
-   .eslintrc
-   package.json 里配置一个 eslintConfig 属性

## 6. .editorconfig 文件的作用是什么 ？

EditorConfig 包含一个用于定义代码格式的文件和一批编辑器插件，这些插件是让编辑器读取配置文件并以此来格式化代码。

## 7. .prettierrc 配置文件的作用 ？


## 8.  webpack 如何支持 react 开发？

1. 安装 react react-dom
npm i react react-dom --save

2. 安装babel解析 jsx语法

npm install babel babel-cli babel-loader --save-dev

3. 支持 react 和 es6语法
npm i @babel/preset-env  @babel/preset-react --save-dev

4. 配置webpack

rules: [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  }
]

5. 配置 .babelrc 文件

{
  "presets": ["@babel/env", "@babel/react"]
}

## 9. 目前webpack虽然支持 react，但是打包出来的文件太大了，可以使用压缩，减少发布体积 ？



## 10. 目前dist文件里便是 可以成功打包的， 支持react开发的浏览器插件项目了。