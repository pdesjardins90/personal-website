# personal-website

My personal website, it's a simple progressive web application powered by web components!

## Requirements

- [Node 12+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## Install

```bash
git clone git@github.com:pdesjardins90/personal-website.git
cd personal-website
yarn install
```

## Test

This project uses these libraries for its test suite (with some related plugins):

- [Mocha](https://mochajs.org), as the primary test framework
- [Chai](https://www.chaijs.com), for semantic assertions
- [Sinon](https://sinonjs.org), for spies, stubs and mocks
- [Karma](https://karma-runner.github.io/4.0/index.html), as the test runner
- [Istanbul](https://istanbul.js.org), for code coverage metrics

To run tests:

```bash
yarn test
```

To check the coverage report for the tests:

```bash
yarn start:coverage
```

To debug tests in vscode:

```bash
yarn test:debug:serve # This will start the test server process
# Attach the vscode debugger to the process via the 'Karma tests: Attach Chrome' launch configuration
yarn test:debug:run # This will run the tests and hit any breakpoint you set up in vscode
```

## Develop

Serve the app at `localhost:8080`:

```bash
yarn start
```

## Lint

This project uses these libraries for linting and formatting:

- [ESLint](https://eslint.org), to lint the code
- [Prettier](https://prettier.io), to format the code
- [commitlint](https://commitlint.js.org/), to ensure conventional commit messages
- [Husky](https://github.com/typicode/husky), to run those jobs on precommit

To lint the project:

```bash
yarn lint
```

To format the project:

```bash
yarn format
```

## Build

To build the project:

```bash
yarn build
```

To visualize the build:

```bash
yarn start:build
```

## Resources

- [LitElement & lit-html](https://www.polymer-project.org)
- [open-wc](https://open-wc.org/)
