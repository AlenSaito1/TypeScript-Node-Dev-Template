<div align="center">

![node-ts](/.github/assets/images/node-ts.png)

# TS Node Dev Template

</div>


A template for creating a TS Node project.

## Setup

Click the `Use this template` button to generate a new project with the template.

![setup](/.github/assets/images/setup.png)

## Folder Structure

```TXT
|- src
|   |- index.ts
|- tests
|   |- index.test.ts
|- eslintrc.js
|- .gitattributes
|- .gitignore
|- .prettierrc
|- package.json
|- package-lock.json
|- README.md
|- tsconfig.json
```

The `src` folder contains the source code.
`tests` contains the tests, and are run using mocha

## Scripts

`build` - Builds the project using the Typescript Compiler
`lint` - Runs eslint on the project
`fmt` - Runs prettier on the project
`test` - Runs the tests using mocha
`dev` - Runs the project using nodemon and ts-node (for development)

## References

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mocha](https://mochajs.org/)