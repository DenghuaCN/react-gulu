# react-gulu

### ESLint
[Setting ESLint on a React Typescript project (2021)](https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba)


### 目录结构

```
-- /                              项目根目录
    |-- test/                      单元测试目录
    |-- lib/                       源代码目录
    |-- package.json               npm 项目文件
    |-- .npmrc                     npm 配置文件
    |-- yarn.lock                  yarn lock文件
    |-- .gitignore                 git 忽略配置文件
    |-- .editorconfig              EditorConfig配置文件
    |-- .eslintrc                  ESLint配置文件
    |-- .eslintignore              eslint 忽略配置文件
    |-- .prettierrc                Prettier配置文件
    |-- jest.config.js             Jest 配置文件
    |-- tsconfig.json              typescript配置文件
    |-- tsconfig.test.json         typescript测试配置文件
    |-- README.md                  项目说明文件

    |-- .babelrc                   babel 配置文件
    |-- webpack.config.js          webpack 配置文件
    |-- webpack.config.dev.js      webpack 测试环境配置文件
    |-- webpack.config.prod.js     webpack 生产环境配置文件
```

### package.json说明


* **[React](https://github.com/facebook/react/)** <br>
  React core

  * **[react-dom](https://www.npmjs.com/package/awesome-typescript-loader)** <br>
    提供了可在应用顶层使用的 DOM（DOM-specific）方法

  * **[react-test-renderer](https://www.npmjs.com/package/awesome-typescript-loader)** <br>
    这个 package 提供了一个 React 渲染器，用于将 React 组件渲染成纯 JavaScript 对象，无需依赖 DOM 或原生移动环境。


* **[typescript](https://www.typescriptlang.org/)** <br>
    TypeScript带来了可选的静态类型检查以及最新的ECMAScript特性......

  * **[awesome-typescript-loader](https://www.npmjs.com/package/awesome-typescript-loader)** <br>
    Webpack 转译 Typescript

  * **[@typescript-eslint/parser](https://www.npmjs.com/package/awesome-typescript-loader)** <br>
    用于ESLint 对 TypeScript 的解析

  * **[@types/jest](https://www.npmjs.com/package/@types/jest)** <br>
    包含Jest的类型定义

  * **[@types/react](https://www.npmjs.com/package/@types/jest)** <br>
    包含React的类型定义
    [参考1](https://zhuanlan.zhihu.com/p/129632306)
    [参考2](https://zh-hans.reactjs.org/docs/static-type-checking.html)

  * **[@types/react-dom]()** <br>
    React-DOM的声明文件

  * **[@types/react-test-renderer](https://zh-hans.reactjs.org/docs/test-renderer.html)** <br>
    react-test-renderer的类型定义

* **[webpack](https://webpack.js.org)** <br>

  * **[webpack-cli](https://www.npmjs.com/package/webpack-cli)** <br>
    webpack的CLI工具

  * **[webpack-dev-server](https://webpack.js.org/configuration/dev-server/)** <br>
    一个小型的Node.js Express服务器,它使用webpack-dev-middleware来服务于webpack的包


* **[eslint](https://eslint.org/)** <br>
    代码检测工具

  * **[babel-eslint](https://github.com/babel/babel-eslint)** <br>
    该依赖包允许你使用一些实验特性的时候，依然能够用上Eslint语法检查。反过来说，当你代码并没有用到Eslint不支持的实验特性的时候是不需要安装此依赖包的。

  * **[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)** <br>
    Typescript语法的解析器，类似于babel-eslint解析器一样。对应parserOptions的配置参考官方的README。

  * **[@typescript-eslint/eslint-plugin](Typescript辅助Eslint的插件。)** <br>
    一个ESLint插件，包含了各类定义好的检测Typescript代码的规范

  * **[eslint-config-alloy]((https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md))** <br>
    AlloyTeam ESLint一套适用于 React/Vue/Typescript 项目的 ESLint 配置规范

  * **[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)** <br>
  ESLint 的配置库，用于关闭那些不需要或与 Prettier 冲突的 ESLint 规则。这可以让你在使用 Prettier 时，可以使用你最喜欢的 ESLint 共享配置而不使用该共享配置里有关样式的规则

  * **[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)** <br>
    eslint-plugin-prettier是使用 Prettier 进行格式化的 ESLint 插件，它会将 Pretter 作为 ESLint 的一条规则来运行并进行格式化，然后与格式化之前的代码进行对比，如果出现了不一致，这个地方就会被 Prettier 进行标记并报告出来。

  * **[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)** <br>
    一些react的eslint的rules规范

* **[Babel](https://babeljs.io/)** <br>
  Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：

  * **[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)** <br>
    一个智能的babel预设, 让你能使用最新的JavaScript语法, 它会帮你转换成代码的目标运行环境支持的语法, 提升你的开发效率并让打包后的代码体积更小

  * **[babel-eslint](https://github.com/babel/babel-eslint)** <br>
    使ESLint能静态分析所有可被babel编译的JavaScript代码。

  * **[babel-jest](https://jestjs.io/zh-Hans/docs/getting-started)** <br>
  不使用Create React App创建React应用,需要安装一些包来使他们运行起来。 我们使用babel-jest包和  babel-preset-react，从而在测试环境中转换我们代码。 可参考使用babel

  * **[@babel/preset-react](https://www.babeljs.cn/docs/babel-preset-react)** <br>
  不使用Create React App创建React应用,需要安装一些包来使他们运行起来。 我们使用babel-jest包和babel-preset-react，从而在测试环境中转换我们代码。 可参考使用babel


* **[cross-env](https://www.npmjs.com/package/cross-env)** <br>
    运行跨平台设置和使用环境变量(Node中的环境变量)的脚本，用于兼容Windows和POSIX环境。

* **[html-webpack-plugin](https://www.webpackjs.com/plugins/html-webpack-plugin/)** <br>
    使用 webpack打包时，创建一个 html 文件，并把 webpack 打包后的静态文件自动插入到这个 html 文件当中

* **[cross-env](https://www.npmjs.com/package/cross-env)** <br>
    运行跨平台设置和使用环境变量(Node中的环境变量)的脚本，用于兼容Windows和POSIX环境。

* **[husky]()** <br>
    Git Hooks 就是在 Git 执行特定事件（如commit、push、receive等）时触发运行的脚本，类似于“钩子函数”。
    husky则用于在安装过程中会在 .git/hooks 文件夹中生成一系列的 git hook 脚本

* **[lint-staged](https://www.npmjs.com/package/lint-staged)** <br>
    针对暂存的git文件运行linters，不要让 💩 进入您的代码库。<br>
    lint-staged 总是将所有暂存文件的列表传递给任务。

* **[prettier](https://prettier.io/)** <br>
    支持多种语言的 opinionated 代码格式化工具

* **[jest](https://jestjs.io/zh-Hans/)** <br>
    JavaScript 测试框架，支持Babel, TypeScript, Node, React, Angular, Vue。

    * **[ts-jest]()** <br>
        为Jest 配置TypeScript. 为了在测试中使用TypeScript 文件，我们需要在Jest 中设置编译TypeScript。
        [参考1](https://monsoir.github.io/Notes/React/react/react-typescript-jest.html)
        [参考2](https://vue-test-utils.vuejs.org/zh/guides/using-with-typescript.html)
