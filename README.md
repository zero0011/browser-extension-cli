# browser-extension-cli
Browser plug-in development framework.and The CLI support you devlop Broswer Extension by React or Vue


# Quick Overview

```sh
npm install -g browser-extension-cli
browser-extension-cli project-directory
```


# todolist
- [x] 初始化项目
- [] 支持eslint代码规范
- [] 支持原生 html,css,js 开发浏览器插件
- [] 支持使用 React 开发浏览器插件
  - [] 支持使用命令 options 设置React开发
- [] 支持使用 Vue 开发浏览器插件
  - [] 支持使用命令 options 设置Vue开发
- [] 支持自动化测试此脚手架

# Bugs

- [x] 无法支持传递空项目名,报错提示用户需要一个合适的项目名称
- [] 读取readme.md文件报错
- [] 如何支持使用react开发一个项目



# Q&A

1. 如何在项目中支持 React框架的应用开发？为什么配置了webpack但是没有效果？


2. #!/usr/bin/env node 的作用是什么？
在写npm包的时候须要在脚本的第一行写上#!/usr/bin/env node ，用于指明该脚本文件要使用node来执行。node

/usr/bin/env 用来告诉用户到path目录下去寻找node，#!/usr/bin/env node 可让系统动态的去查找node，已解决不一样机器不一样用户设置不一致问题。web

PS： 该命令必须放在第一行， 否者不会生效n

3. child_process Node模块如何使用 ？

child_process 中 execSync API并没有效果。
有效果,只不过把 stdio(标准输入输出) 设置为 ignore,所以看出什么效果